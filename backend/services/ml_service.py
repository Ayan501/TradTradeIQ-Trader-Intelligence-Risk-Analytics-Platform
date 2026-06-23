"""ML service helpers."""

import joblib 
from pathlib import Path
import pandas as pd

BASE_DIR = Path(__file__).resolve().parents[2]

MODEL_PATH = BASE_DIR / "artifacts" / "model_trainer" / "model.pkl"

PROCESSOR_PATH = (
    BASE_DIR
    /"artifacts"
    /"transformation"
    /"preprocessor.pkl"
)

model = joblib.load(MODEL_PATH)
preprocessor = joblib.load(PROCESSOR_PATH)

def predict_trader(data: dict):

    df = pd.DataFrame([data])

    transformed_data = preprocessor.transform(df)

    prediction = model.predict(transformed_data)

    return prediction[0]