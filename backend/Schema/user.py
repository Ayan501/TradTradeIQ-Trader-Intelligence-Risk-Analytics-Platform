from pydantic import BaseModel,EmailStr

class RegisterRequest(BaseModel):
    org_id:int
    name : str
    email : EmailStr
    password : str

class LoginRequest(BaseModel):
    org_id:int
    email : EmailStr
    password : str