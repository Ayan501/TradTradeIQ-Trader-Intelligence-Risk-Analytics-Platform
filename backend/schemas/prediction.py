from pydantic import BaseModel, Field, ConfigDict

class PredictRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    trade_count: float
    total_pnl: float
    avg_size_usd: float
    win_rate: float
    unique_assets: float = Field(alias="unique_assests")
    fg_value: float
    sentiment : str
