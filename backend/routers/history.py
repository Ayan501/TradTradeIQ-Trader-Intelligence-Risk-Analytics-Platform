"""History routes."""

from fastapi import APIRouter
from sqlalchemy import text

try:
    from app.database import engine
except ModuleNotFoundError:
    from backend.app.database import engine


router = APIRouter()


@router.get("/history/{user_id}")
def get_history(user_id: int):

    with engine.connect() as conn:

        history = conn.execute(
            text("""
                SELECT
                    pred_id,
                    predicted_outcome,
                    confidence_score,
                    advisory_text,
                    created_at
                FROM predictions
                WHERE user_id = :user_id
                ORDER BY created_at DESC
            """),
            {
                "user_id": user_id
            }
        ).mappings().all()

    return history