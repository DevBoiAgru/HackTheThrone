from pydantic import BaseModel
from typing import Optional

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    xp: int
    lives: int

    class Config:
        from_attributes = True

class UserProgressResponse(BaseModel):
    user_id: int
    completed_questions: list[int]
    xp: int
    lives: int

class QuestionValidateRequest(BaseModel):
    question_number: int
    answer: str

class QuestionResponse(BaseModel):
    question_number: int
    section_number: int
    title: str
    content: str
    isQuestion: bool
    options: Optional[list[str]] = None
    xp_reward: int

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
