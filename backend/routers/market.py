"""Market routes."""
from datetime import datetime
from fastapi import APIRouter

router = APIRouter()


@router.get("/market")
def market_data():

    return {
        "fear_greed_index": 72,
        "market_sentiment": "Greed",
        "market_status": "Bullish",
        "last_update" : datetime.now()
    }