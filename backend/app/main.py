import sys
from pathlib import Path

from fastapi import FastAPI

BACKEND_DIR = Path(__file__).resolve().parents[1]
if str(BACKEND_DIR) not in sys.path:
    sys.path.append(str(BACKEND_DIR))

try:
    from backend.routers.auth import router as auth_router
    from backend.routers.predict import router as predict_router
    from backend.routers.history import router as history_router
    from routers.market import router as market_router

except ModuleNotFoundError:
    from routers.auth import router as auth_router
    from routers.predict import router as predict_router
    from routers.history import router as history_router
    from routers.market import router as market_router


app = FastAPI()

app.include_router(auth_router)
app.include_router(predict_router)
app.include_router(history_router)
app.include_router(market_router)