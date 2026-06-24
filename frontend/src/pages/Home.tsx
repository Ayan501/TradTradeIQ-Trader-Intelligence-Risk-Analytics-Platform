import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", value: 25 },
  { day: "Tue", value: 38 },
  { day: "Wed", value: 42 },
  { day: "Thu", value: 65 },
  { day: "Fri", value: 88 },
  { day: "Sat", value: 97 },
];
function Home() {

    
  return (
    <div className="bg-[#F6E9D9] min-h-screen">

      {/* HERO SECTION */}
        <section className="bg-[#043222] text-[#F6E9D9] rounded-3xl mx-5 mt-4">
            <div className="max-w-7xl mx-auto px-8 pt-28 pb-20">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <span className="border border-green-700 px-4 py-2 rounded-full text-sm">
                AI POWERED TRADING INTELLIGENCE
              </span>

              <h1 className="text-6xl font-bold mt-8 leading-tight">
                Smarter Trades.
                <br />
                <span className="text-green-300">
                  Better Decisions.
                </span>
              </h1>

              <p className="mt-8 text-lg text-gray-300 max-w-xl">
                TraderIQ uses advanced AI to analyze market behavior,
                measure risk, and deliver actionable insights that
                give you an edge.
              </p>

              <div className="flex gap-4 mt-10">

                <button className="bg-[#F6E9D9] text-[#043222] px-6 py-3 rounded-xl font-semibold">
                  Get Started Free
                </button>

                <button className="border border-[#F6E9D9] px-6 py-3 rounded-xl">
                  Try AI Assistant
                </button>

              </div>

            </div>

            {/* RIGHT DASHBOARD */}

           {/* RIGHT DASHBOARD */}

<div>

  <div className="bg-[#052a1d] border border-green-900 rounded-3xl p-6 shadow-2xl">

    <div className="flex justify-between items-center">

      <div>
        <p className="text-sm text-gray-400">
          Market Outlook
        </p>

        <h3 className="text-3xl font-bold text-green-400 mt-1">
          BULLISH ↗
        </h3>
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-400">
          Confidence
        </p>

        <h3 className="text-3xl font-bold text-white mt-1">
          78%
        </h3>
      </div>

    </div>

    <div className="mt-6 bg-[#083625] rounded-2xl p-4 flex justify-between items-center">

      <div>
        <p className="text-sm text-gray-400">
          Expected Return
        </p>

        <h3 className="text-2xl font-bold text-green-400">
          +12.4%
        </h3>
      </div>

      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
        Trending Up
      </span>

    </div>

    <div className="h-64 mt-6 bg-[#083625] rounded-2xl p-3">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#86EFAC"
            strokeWidth={4}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

    <div className="grid grid-cols-3 gap-4 mt-6">

      <div className="bg-[#083625] rounded-xl p-4">

        <p className="text-xs text-gray-400">
          Risk Score
        </p>

        <h4 className="text-xl font-bold mt-2">
          12/100
        </h4>

      </div>

      <div className="bg-[#083625] rounded-xl p-4">

        <p className="text-xs text-gray-400">
          Sentiment
        </p>

        <h4 className="text-xl font-bold mt-2 text-green-400">
          Positive
        </h4>

      </div>

      <div className="bg-[#083625] rounded-xl p-4">

        <p className="text-xs text-gray-400">
          Signal
        </p>

        <h4 className="text-xl font-bold mt-2 text-green-400">
          BUY
        </h4>

      </div>

    </div>

  </div>

</div>
          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-center text-5xl font-bold text-[#043222]">
            AI-Powered Insights
          </h2>

          <p className="text-center mt-4 text-gray-600">
            Smarter trading decisions powered by machine learning.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-xl">
                AI Prediction
              </h3>

              <p className="mt-4 text-gray-600">
                Predict trading outcomes using trained ML models.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-xl">
                Market Sentiment
              </h3>

              <p className="mt-4 text-gray-600">
                Analyze Fear & Greed sentiment instantly.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-xl">
                Risk Assessment
              </h3>

              <p className="mt-4 text-gray-600">
                Understand trader risk before taking action.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-xl">
                Prediction History
              </h3>

              <p className="mt-4 text-gray-600">
                Review all previous predictions anytime.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="bg-white rounded-3xl p-10">

            <h2 className="text-center text-4xl font-bold text-[#043222]">
              Numbers That Speak
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-10 text-center">

              <div>
                <h3 className="text-4xl font-bold text-[#043222]">
                  10K+
                </h3>
                <p>Happy Traders</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#043222]">
                  50K+
                </h3>
                <p>Predictions</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#043222]">
                  72%
                </h3>
                <p>Accuracy</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#043222]">
                  24/7
                </h3>
                <p>AI Assistance</p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;