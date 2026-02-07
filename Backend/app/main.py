from fastapi import FastAPI
from fastapi.responses import PlainTextResponse
from app.api import auth
from app.database import engine, Base

# Create database tables if they dont exist
Base.metadata.create_all(bind=engine)

app = FastAPI(title="HackBee Backend")

app.include_router(auth.router)

@app.get("/")
async def root():
    return PlainTextResponse(content="Welcome to the HackBee API", status_code=200)

@app.get("/health")
async def health_check():
    return PlainTextResponse(content="healthy", status_code=200)
