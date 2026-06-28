from fastapi import APIRouter
from sqlalchemy import text
from app.database import engine
try:
    from backend.schemas.auth_schemas import RegisterRequest,LoginRequest
except ModuleNotFoundError:
    from schemas.auth_schemas import RegisterRequest,LoginRequest
router = APIRouter(
    prefix="/auth",
    tags=["authentication"]
)

@router.get("/")
def home():
    return {"massage": "Auth Router"}

@router.post("/register")
def register(user: RegisterRequest):

    with engine.connect() as conn:

        existing_user = conn.execute(
            text("""
                SELECT user_id
                FROM users
                WHERE email = :email
            """),
            {
                "email": user.email
            }
        ).fetchone()

        if existing_user:

            return {
                "message": "Email already exists"
            }

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
                    :password,
                    :role
                )
            """),
            {
                "org_id": 1,
                "name": user.name,
                "email": user.email,
                "password": user.password,
                "role": "trader"
            }
        )

    return {
        "message": "User Registered Successfully"
    }

@router.post("/login")
def login(user: LoginRequest):

    with engine.connect() as conn:

        db_user = conn.execute(
            text("""
                SELECT
                    user_id,
                    name,
                    email,
                    password_hash
                FROM users
                WHERE email = :email
            """),
            {
                "email": user.email
            }
        ).fetchone()

    if not db_user:

        return {
            "message": "Invalid Email"
        }

    if user.password != db_user.password_hash:

        return {
            "message": "Invalid Password"
        }

    return {
        "message": "Login Successful",
        "user_id": db_user.user_id,
        "name": db_user.name,
        "email": db_user.email
    }