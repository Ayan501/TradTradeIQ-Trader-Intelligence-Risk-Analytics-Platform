from fastapi import APIRouter

try:
    from backend.schemas import PredictRequest
except ModuleNotFoundError:
    from schemas import PredictRequest

router = APIRouter()

@router.post("/predict")
def predict(data: PredictRequest):

    total_fee = max(data.avg_size_usd * 0.001, 1)

    features = {
        "trade_count": data.trade_count,
        "total_pnl": data.total_pnl,
        "avg_size_usd": data.avg_size_usd,
        "total_fee": total_fee,
        "avg_execution_price": data.avg_size_usd,
        "buy_ratio": 0.5,
        "long_ratio": 0.5,
        "unique_assets": data.unique_assets,
        "win_rate": data.win_rate,
        "fg_value": data.fg_value,
        "net_pnl_after_fee": data.total_pnl - total_fee,
        "pnl_per_trade": data.total_pnl / max(data.trade_count, 1),
        "size_to_fee_ratio": data.avg_size_usd / max(total_fee, 1),
        "sentiment": data.sentiment
    }

    return {
        "status": "success",
        "features": features
    }
