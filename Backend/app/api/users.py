from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models import User
from app.schemas import LeaderboardEntry
from app.api.auth import get_current_user

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/leaderboard", response_model=List[LeaderboardEntry])
async def get_leaderboard(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):


    top_users = db.query(User).order_by(User.xp.desc()).limit(10).all()
    return [{"username": user.username, "xp": user.xp} for user in top_users]
