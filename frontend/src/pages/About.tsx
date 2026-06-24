function About() {
  return (
    <div className="min-h-screen bg-[#F6E9D9] px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="text-center">

          <h1 className="text-5xl font-bold text-[#043222]">
            About TraderIQ
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            TraderIQ is an AI-powered trading advisory platform that
            helps traders analyze market behavior, evaluate risk,
            and make smarter trading decisions using Machine Learning.
          </p>

        </div>

        {/* MISSION */}

        <div className="mt-16 bg-white rounded-3xl p-10 shadow-lg">

          <h2 className="text-3xl font-bold text-[#043222]">
            Our Mission
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Our mission is to make data-driven trading decisions
            accessible to everyone. By combining Machine Learning,
            market sentiment analysis, and trader behavior insights,
            TraderIQ provides actionable recommendations that help
            users reduce risk and improve decision-making.
          </p>

        </div>

        {/* FEATURES */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h3 className="text-2xl font-bold text-[#043222]">
              AI Prediction
            </h3>

            <p className="mt-4 text-gray-600">
              Predict trading outcomes using trained machine learning models.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h3 className="text-2xl font-bold text-[#043222]">
              Risk Analysis
            </h3>

            <p className="mt-4 text-gray-600">
              Identify trading risks based on historical performance and sentiment.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h3 className="text-2xl font-bold text-[#043222]">
              Smart Insights
            </h3>

            <p className="mt-4 text-gray-600">
              Receive AI-generated recommendations to improve trading decisions.
            </p>

          </div>

        </div>

        {/* TECH STACK */}

        <div className="mt-12 bg-[#043222] text-[#F6E9D9] rounded-3xl p-10">

          <h2 className="text-3xl font-bold">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <div className="bg-[#0A4A33] p-5 rounded-2xl text-center">
              FastAPI
            </div>

            <div className="bg-[#0A4A33] p-5 rounded-2xl text-center">
              React
            </div>

            <div className="bg-[#0A4A33] p-5 rounded-2xl text-center">
              PostgreSQL
            </div>

            <div className="bg-[#0A4A33] p-5 rounded-2xl text-center">
              Machine Learning
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;