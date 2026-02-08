from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
import json
import os
from app.database import get_db
from app.models import User, UserProgress
from app.schemas import QuestionResponse, QuestionValidateRequest, UserProgressResponse
from app.api.auth import get_current_user

from app.utils.redis import get_redis

router = APIRouter(prefix="/questions", tags=["questions"])

# Load questions from JSON
QUESTIONS_FILE = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "questions.json")

async def load_questions():
    redis = await get_redis()
    cache_key = "questions_data"
    
    cached_questions = await redis.get(cache_key)
    if cached_questions:
        return json.loads(cached_questions)

    if not os.path.exists(QUESTIONS_FILE):
        return []
    
    with open(QUESTIONS_FILE, "r") as f:
        data = json.load(f)
        questions = data.get("questions", [])
        
    await redis.setex(cache_key, 24*3600, json.dumps(questions))
    return questions

@router.get("/{question_num}", response_model=QuestionResponse)
async def get_question(question_num: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    questions = await load_questions()
    question = next((q for q in questions if q["question_number"] == question_num), None)
    
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")
    
    # Check if unlocked (n-1 check)
    if question_num > 1:
        prev_completed = db.query(UserProgress).filter(
            UserProgress.user_id == current_user.id,
            UserProgress.question_number == question_num - 1
        ).first()
        if not prev_completed:
            raise HTTPException(status_code=403, detail="Question locked. Complete previous questions first.")
    question["correct_answer"] = None
    return question

@router.post("/validate")
async def validate_answer(request: QuestionValidateRequest, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    questions = await load_questions()
    question = next((q for q in questions if q["question_number"] == request.question_number), None)
    
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")
        
    # Theory slides (not a question) are automatically "validated" on access or a simple proceed
    if not question.get("isQuestion", False):
        # Mark as completed if not already
        existing = db.query(UserProgress).filter(
            UserProgress.user_id == current_user.id,
            UserProgress.question_number == request.question_number
        ).first()
        if not existing:
            new_progress = UserProgress(user_id=current_user.id, question_number=request.question_number)
            db.add(new_progress)
            current_user.xp += question.get("xp_reward", 0)
            db.commit()
            # Invalidate leaderboard cache
            redis = await get_redis()
            await redis.delete("leaderboard")
            
        return {
                "status": "success", 
                "message": "Theory slide completed", 
                "xp_awarded": question.get("xp_reward", 0),
                "new_xp": current_user.xp
        }

    # Quiz validation
    if request.answer == question.get("correct_answer"):
        existing = db.query(UserProgress).filter(
            UserProgress.user_id == current_user.id,
            UserProgress.question_number == request.question_number
        ).first()
        if not existing:
            new_progress = UserProgress(user_id=current_user.id, question_number=request.question_number)
            db.add(new_progress)
            current_user.xp += question.get("xp_reward", 0)
            db.commit()
            # Invalidate leaderboard cache
            redis = await get_redis()
            await redis.delete("leaderboard")

        return {
                "status": "success", 
                "message": "Correct Answer", 
                "xp_awarded": question.get("xp_reward", 0),
                "new_xp": current_user.xp
        }
    
    else:
        current_user.lives -= 1
        db.commit()
        return {"status": "wrong", "message": "Incorrect answer", "lives_remaining": current_user.lives}

@router.get("/user/progress", response_model=UserProgressResponse)
async def get_user_progress(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    progress = db.query(UserProgress.question_number).filter(UserProgress.user_id == current_user.id).all()
    completed_nums = [p[0] for p in progress]
    return {
        "user_id": current_user.id,
        "completed_questions": completed_nums,
        "xp": current_user.xp,
        "lives": current_user.lives
    }
