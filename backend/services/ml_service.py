"""ML service helpers."""

import joblib 
from pathlib import Path
import pandas as pd

BASE_DIR = Path(__file__).resolve().parents[1]

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

    probabilities = model.predict_proba(transformed_data)

    confidence = float(round(max(probabilities[0]) * 100, 2))

    return prediction[0], confidence