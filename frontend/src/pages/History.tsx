function History() {
  const historyData = [
    {
      prediction: "Big Win",
      confidence: "92%",
      date: "24 Jun 2026",
    },
    {
      prediction: "Small Win",
      confidence: "81%",
      date: "23 Jun 2026",
    },
    {
      prediction: "Small Loss",
      confidence: "75%",
      date: "22 Jun 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6E9D9] px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-[#043222]">
            Prediction History
          </h1>

          <p className="mt-3 text-gray-600">
            Review your previous AI trading predictions.
          </p>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <h3 className="text-gray-500">
              Total Predictions
            </h3>

            <p className="text-4xl font-bold text-[#043222] mt-2">
              24
            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <h3 className="text-gray-500">
              Accuracy
            </h3>

            <p className="text-4xl font-bold text-green-700 mt-2">
              72%
            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <h3 className="text-gray-500">
              Best Outcome
            </h3>

            <p className="text-4xl font-bold text-[#043222] mt-2">
              Big Win
            </p>

          </div>

        </div>

        {/* TABLE */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold text-[#043222]">
              Recent Predictions
            </h2>

          </div>

          <table className="w-full">

            <thead className="bg-[#043222] text-[#F6E9D9]">

              <tr>

                <th className="text-left px-6 py-4">
                  Prediction
                </th>

                <th className="text-left px-6 py-4">
                  Confidence
                </th>

                <th className="text-left px-6 py-4">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              {historyData.map((item, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="px-6 py-4 font-semibold">
                    {item.prediction}
                  </td>

                  <td className="px-6 py-4">
                    {item.confidence}
                  </td>

                  <td className="px-6 py-4">
                    {item.date}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default History;