"""Pydantic schemas module."""

from pydantic import BaseModel, EmailStr


class RegisterRequest(BaseModel):
    org_id : int
    name: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    org_id: int
    email: EmailStr
    password: str


class PredictRequest(BaseModel):
    trade_count: float
    total_pnl: float
    avg_size_usd: float
    win_rate: float
    unique_assets: float
    fg_value: float
    sentiment: str