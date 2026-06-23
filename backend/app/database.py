"""Database setup module."""

import sys
from pathlib import Path

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,declarative_base

BACKEND_DIR = Path(__file__).resolve().parents[1]
if str(BACKEND_DIR) not in sys.path:
    sys.path.append(str(BACKEND_DIR))

try:
    from backend.app.config import DATABASE_URL
except ModuleNotFoundError:
    try:
        from app.config import DATABASE_URL
    except ModuleNotFoundError:
        from config import DATABASE_URL

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autoflush=False,
    autocommit = False,
    bind= engine
)

Base = declarative_base()
