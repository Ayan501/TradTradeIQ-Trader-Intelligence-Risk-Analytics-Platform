type PredictionResultProps = {
  prediction: string;
  advice: string;
};

function PredictionResult({
  prediction,
  advice,
}: PredictionResultProps) {
  return (
    <div className="card">
      <h2>Prediction Result</h2>

      <p>
        <strong>Prediction:</strong> {prediction}
      </p>

      <p>
        <strong>Advice:</strong> {advice}
      </p>
    </div>
  );
}

export default PredictionResult;