import { useState } from "react";

function AIAssistant() {
  const [prediction, setPrediction] = useState("");
  const [advice, setAdvice] = useState("");

  return (
    <div className="min-h-screen bg-[#F6E9D9] px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-[#043222]">
            AI Trading Assistant
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Analyze trading behavior and receive AI-powered insights.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">

          {/* FORM */}

          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-bold text-[#043222] mb-6">
              Trading Metrics
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="number"
                placeholder="Trade Count"
                className="border rounded-xl px-4 py-3"
              />

              <input
                type="number"
                placeholder="Total PnL"
                className="border rounded-xl px-4 py-3"
              />

              <input
                type="number"
                placeholder="Average Trade Size"
                className="border rounded-xl px-4 py-3"
              />

              <input
                type="number"
                placeholder="Win Rate"
                className="border rounded-xl px-4 py-3"
              />

              <input
                type="number"
                placeholder="Unique Assets"
                className="border rounded-xl px-4 py-3"
              />

              <input
                type="number"
                placeholder="Fear & Greed Score"
                className="border rounded-xl px-4 py-3"
              />

            </div>

            <div className="mt-5">

              <select className="w-full border rounded-xl px-4 py-3">

                <option>Fear</option>

                <option>Greed</option>

                <option>Neutral</option>

                <option>Extreme Fear</option>

                <option>Extreme Greed</option>

              </select>

            </div>

            <button
              className="w-full mt-8 bg-[#043222] text-[#F6E9D9] py-4 rounded-xl font-semibold"
            >
              Analyze Trader
            </button>

          </div>

          {/* RESULT CARD */}

          <div className="bg-[#043222] text-[#F6E9D9] rounded-3xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold">
              Prediction Result
            </h2>

            <div className="mt-8">

              <p className="text-sm opacity-70">
                Predicted Outcome
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {prediction || "Waiting..."}
              </h3>

            </div>

            <div className="mt-10">

              <p className="text-sm opacity-70">
                AI Recommendation
              </p>

              <p className="mt-3 leading-7">
                {advice || "Submit trading metrics to receive advice."}
              </p>

            </div>

            <div className="mt-10 p-4 rounded-xl bg-[#0A4A33]">

              <p className="text-sm">
                TraderIQ uses market sentiment,
                historical behavior and ML models
                to generate recommendations.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;