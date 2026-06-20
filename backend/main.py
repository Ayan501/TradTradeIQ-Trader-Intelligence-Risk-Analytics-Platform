from fastapi import FastAPI

try:
    from backend.routers.auth import router as auth_router
    from backend.routers.predict import router as predict_router

except ModuleNotFoundError:
    from routers.auth import router as auth_router
    from routers.predict import router as predict_router



app = FastAPI()

app.include_router(auth_router)
app.include_router(predict_router)

@app.get("/")
def home():
    return {"Home Page": "This Is homepage"}

