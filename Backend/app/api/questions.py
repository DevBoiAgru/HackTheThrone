from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
import json
import os
from app.database import get_db
from app.models import User, UserProgress
from app.schemas import QuestionResponse, QuestionValidateRequest, UserProgressResponse
from app.api.auth import get_current_user

router = APIRouter(prefix="/questions", tags=["questions"])

# Load questions from JSON
QUESTIONS_FILE = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "questions.json")

def load_questions():
    if not os.path.exists(QUESTIONS_FILE):
        return []
    with open(QUESTIONS_FILE, "r") as f:
        data = json.load(f)
        return data.get("questions", [])

@router.get("/{question_num}", response_model=QuestionResponse)
async def get_question(question_num: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    questions = load_questions()
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
            
    return question

@router.post("/validate")
async def validate_answer(request: QuestionValidateRequest, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    questions = load_questions()
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
            current_user.xp += question["xp_reward"]
            db.commit()
        return {"status": "success", "message": "Theory slide completed", "xp_awarded": question["xp_reward"]}

    # Quiz validation
    if request.answer == question.get("correct_answer"):
        existing = db.query(UserProgress).filter(
            UserProgress.user_id == current_user.id,
            UserProgress.question_number == request.question_number
        ).first()
        if not existing:
            new_progress = UserProgress(user_id=current_user.id, question_number=request.question_number)
            db.add(new_progress)
            current_user.xp += question["xp_reward"]
            db.commit()
        return {"status": "success", "message": "Correct answer!", "xp_awarded": question["xp_reward"]}
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
