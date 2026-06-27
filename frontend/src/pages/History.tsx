import { useEffect, useState } from "react";
import api from "../services/api";

interface HistoryItem {
  pred_id: number;
  predicted_outcome: string;
  confidence_score: number;
  advisory_text: string;
  created_at: string;
}

function History() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get(`/history/${userId}`);
      setHistory(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  const accuracy =
    history.length > 0
      ? (
          (history.filter(
            (item) =>
              item.predicted_outcome === "big_win" ||
              item.predicted_outcome === "small_win"
          ).length /
            history.length) *
          100
        ).toFixed(0)
      : "0";

  return (
    <div className="min-h-screen bg-[#F6E9D9] px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#043222]">
            Prediction History
          </h1>

          <p className="mt-3 text-gray-600">
            Review your previous AI trading predictions.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-gray-500">
              Total Predictions
            </h3>

            <p className="text-4xl font-bold text-[#043222] mt-2">
              {history.length}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-gray-500">
              Positive Predictions
            </h3>

            <p className="text-4xl font-bold text-green-700 mt-2">
              {accuracy}%
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-gray-500">
              Latest Prediction
            </h3>

            <p className="text-2xl font-bold text-[#043222] mt-2 capitalize">
              {history.length
                ? history[0].predicted_outcome.replace("_", " ")
                : "--"}
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold text-[#043222]">
              Recent Predictions
            </h2>

          </div>

          {loading ? (

            <div className="p-10 text-center">
              Loading...
            </div>

          ) : history.length === 0 ? (

            <div className="p-10 text-center text-gray-500">
              No prediction history found.
            </div>

          ) : (

            <table className="w-full">

              <thead className="bg-[#043222] text-[#F6E9D9]">

                <tr>

                  <th className="px-6 py-4 text-left">
                    Prediction
                  </th>

                  <th className="px-6 py-4 text-left">
                    Confidence
                  </th>

                  <th className="px-6 py-4 text-left">
                    Advice
                  </th>

                  <th className="px-6 py-4 text-left">
                    Date
                  </th>

                </tr>

              </thead>

              <tbody>

                {history.map((item) => (

                  <tr
                    key={item.pred_id}
                    className="border-b hover:bg-green-50 transition-all duration-300"
                  >

                    <td className="px-6 py-4">

<span
                    className={`px-3 py-2 rounded-full text-sm font-semibold
                    ${
                    item.predicted_outcome==="big_win"
                    ?"bg-green-100 text-green-700"
                    :item.predicted_outcome==="small_win"
                    ?"bg-green-50 text-green-600"
                    :item.predicted_outcome==="neutral"
                    ?"bg-yellow-100 text-yellow-700"
                    :item.predicted_outcome==="small_loss"
                    ?"bg-orange-100 text-orange-700"
                    :"bg-red-100 text-red-700"
                    }`}
                    >
                    {item.predicted_outcome.replace("_"," ")}
                    </span>

                    </td>

                    <td className="px-6 py-4">
                        {item.confidence_score}%
                      </td>

                    <td className="px-6 py-4 max-w-sm text-gray-600">
                      {item.advisory_text}
                    </td>

                    <td className="px-6 py-4">
                      {new Date(item.created_at).toLocaleDateString()}{new Date(item.created_at).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          )}

        </div>

      </div>

    </div>
  );
}

export default History;