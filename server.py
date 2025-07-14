from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
import uvicorn

# Load environment variables
load_dotenv()

# MongoDB connection
mongo_url = os.getenv("MONGO_URL")
db_name = os.getenv("DB_NAME")

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# FastAPI app
app = FastAPI()
api_router = APIRouter(prefix="/api")

# Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# API Routes
@api_router.get("/")
async def api_index():
    return {"message": "Hello from Render API!"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**item) for item in status_checks]

# Include API router
app.include_router(api_router)

# Root route for `/`
@app.get("/")
async def root_welcome():
    return {
        "message": "✅ BOI BC Point Backend is Live!",
        "endpoints": [
            "/api/",
            "/api/status",
        ]
    }

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# MongoDB client shutdown
@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# Entry point
if __name__ == "__main__":
    uvicorn.run(
        "server:app",
        host="0.0.0.0",
        port=10000,
        reload=False  # Set True only for local development
    )
