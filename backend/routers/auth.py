from fastapi import APIRouter, HTTPException
from sqlalchemy import text

try:
    from backend.database import engine
    from backend.schemas import LoginRequest, RegisterRequest
    from backend.services.security import (
        create_access_token,
        hash_password,
        verify_password,
    )
except ModuleNotFoundError:
    from database import engine
    from schemas import LoginRequest, RegisterRequest
    from services.security import (
        create_access_token,
        hash_password,
        verify_password,
    )


router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register")
def register(user: RegisterRequest):

    with engine.connect() as conn:

        existing_user = conn.execute(
            text("""
                SELECT user_id
                FROM users
                WHERE email = :email
            """),
            {"email": user.email}
        ).fetchone()

        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="Email already registered"
            )

    hashed_password = hash_password(user.password)

    with engine.begin() as conn:

        conn.execute(
            text("""
                INSERT INTO users
                (   
                    org_id,
                    name,
                    email,
                    password_hash,
                    role
                )
                VALUES
                (
                    :org_id,
                    :name,
                    :email,
                    :password_hash,
                    :role
                )
            """),
            {
                "org_id": 1,
                "name": user.name,
                "email": user.email,
                "password_hash": hashed_password,
                "role": "trader",
            }
        )

    return {
        "message": "User registered successfully"
    }


@router.post("/login")
def login(user: LoginRequest):

    with engine.connect() as conn:

        db_user = conn.execute(
            text("""
                SELECT
                    user_id,
                    email,
                    password_hash
                FROM users
                WHERE email = :email
            """),
            {"email": user.email}
        ).fetchone()

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email"
        )

    if not verify_password(
        user.password,
        db_user.password_hash,
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid password"
        )

    token = create_access_token(
        {
            "user_id": db_user.user_id,
            "email": db_user.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }
