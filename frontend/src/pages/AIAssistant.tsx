import { useState } from "react";
import api from "../services/api";

function AIAssistant() {

  const [form, setForm] = useState({
    user_id: Number(localStorage.getItem("user_id")) || 1,
    trade_count: "",
    total_pnl: "",
    avg_size_usd: "",
    win_rate: "",
    unique_assets: "",
    fg_value: "",
    sentiment: "Fear",
  });
  const [confidence, setConfidence] = useState(0);
  const [prediction, setPrediction] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePredict = async () => {

    try {

      setLoading(true);

      const response = await api.post("/predict", {
        user_id: form.user_id,
        trade_count: Number(form.trade_count),
        total_pnl: Number(form.total_pnl),
        avg_size_usd: Number(form.avg_size_usd),
        win_rate: Number(form.win_rate),
        unique_assets: Number(form.unique_assets),
        fg_value: Number(form.fg_value),
        sentiment: form.sentiment,
      });

      setPrediction(response.data.prediction);
      setAdvice(response.data.advice);
      setConfidence(response.data.confidence_score);

    } catch (err) {

      console.log(err);
      alert("Prediction Failed");

    } finally {

      setLoading(false);

    }
  };

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

            <div>
                <label className="block mb-2 font-medium text-[#043222]">
                  Trade Count
                </label>

                <input
                  type="number"
                  name="trade_count"
                  value={form.trade_count}
                  onChange={handleChange}
                  placeholder="Enter total trades"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                  <label className="block mb-2 font-medium text-[#043222]">
                    Total Profit & Loss ($)
                  </label>

                  <input
                    type="number"
                    name="total_pnl"
                    value={form.total_pnl}
                    onChange={handleChange}
                    placeholder="Enter total PnL"
                    className="w-full border rounded-xl px-4 py-3"
                  />
                </div>

              <div>
                        <label className="block mb-2 font-medium text-[#043222]">
                          Average Trade Size ($)
                        </label>

                        <input
                          type="number"
                          name="avg_size_usd"
                          value={form.avg_size_usd}
                          onChange={handleChange}
                          placeholder="Average trade amount"
                          className="w-full border rounded-xl px-4 py-3"
                        />
                      </div>

              <div>
                      <label className="block mb-2 font-medium text-[#043222]">
                        Win Rate (%)
                      </label>

                      <input
                        type="number"
                        name="win_rate"
                        value={form.win_rate}
                        onChange={handleChange}
                        placeholder="0 - 100"
                        className="w-full border rounded-xl px-4 py-3"
                      />
                    </div>

              <div>
                <label className="block mb-2 font-medium text-[#043222]">
              Unique Assets
            </label>

            <input
              type="number"
              name="unique_assets"
              value={form.unique_assets}
              onChange={handleChange}
              placeholder="Number of assets"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

            <div>
            <label className="block mb-2 font-medium text-[#043222]">
              Fear & Greed Score
            </label>
            <input
              type="number"
              name="fg_value"
              value={form.fg_value}
              onChange={handleChange}
              placeholder="0 - 100"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>
                          

            <div className="mt-5">

              <select
                name="sentiment"
                value={form.sentiment}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="Fear">Fear</option>
                <option value="Greed">Greed</option>
                <option value="Neutral">Neutral</option>
                <option value="Extreme Fear">Extreme Fear</option>
                <option value="Extreme Greed">Extreme Greed</option>
              </select>

            </div>

            <button
              onClick={handlePredict}
              disabled={loading}
              className="w-full mt-8 bg-[#043222] text-[#F6E9D9] py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze Trader"}
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
              <p className="text-sm opacity-70 mt-6">
                Confidence
              </p>

              <h3 className="text-2xl font-bold">
                {confidence}%
              </h3>
              <h3 className="text-3xl font-bold mt-2 text-green-300">
                {prediction || "Waiting..."}
              </h3>

            </div>

            <div className="mt-10">

              <p className="text-sm opacity-70">
                AI Recommendation
              </p>

              <p className="mt-3 leading-7">
                {advice || "Submit trading metrics to receive AI advice."}
              </p>

            </div>

            <div className="mt-10 p-4 rounded-xl bg-[#0A4A33]">

              <h3 className="font-semibold mb-3">
                Summary
              </h3>

              <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                  <span>User</span>
                  <span>{localStorage.getItem("user_name") || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span>Sentiment</span>
                  <span>{form.sentiment}</span>
                </div>

                <div className="flex justify-between">
                  <span>Trades</span>
                  <span>{form.trade_count || "-"}</span>
                </div>

                <div className="flex justify-between">
                  <span>Win Rate</span>
                  <span>
                    {form.win_rate ? `${form.win_rate}%` : "-"}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;
