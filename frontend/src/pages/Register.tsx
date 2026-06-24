function Register() {
  return (
    <div className="min-h-screen bg-[#F6E9D9] flex items-center justify-center px-6">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}

        <div className="bg-[#043222] text-[#F6E9D9] p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight">
            Join TraderIQ
          </h1>

          <p className="mt-6 text-green-100 text-lg">
            Create your account and unlock AI-powered trading intelligence.
          </p>

          <div className="mt-10 space-y-4">

            <div className="bg-[#0A4A33] p-4 rounded-xl">
              AI-Powered Predictions
            </div>

            <div className="bg-[#0A4A33] p-4 rounded-xl">
              Fear & Greed Analysis
            </div>

            <div className="bg-[#0A4A33] p-4 rounded-xl">
              Personalized Insights
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-12">

          <h2 className="text-4xl font-bold text-[#043222]">
            Register
          </h2>

          <p className="mt-2 text-gray-500">
            Create your account to get started
          </p>

          <form className="mt-8 space-y-5">

            <div>
              <label className="block mb-2 font-medium text-[#043222]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#043222]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#043222]">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#043222]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#043222]">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#043222]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#043222] text-[#F6E9D9] py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Create Account
            </button>

          </form>

          <p className="mt-6 text-center text-gray-500">
            Already have an account?
            <span className="text-[#043222] font-semibold ml-2 cursor-pointer">
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;