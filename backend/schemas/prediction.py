from pydantic import BaseModel

class PredictRequest(BaseModel):
    user_id: int
    trade_count: float
    total_pnl: float
    avg_size_usd: float
    win_rate: float
    unique_assets: float
    fg_value: float
    sentiment: str