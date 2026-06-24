function Login() {
  return (
    <div className="min-h-screen bg-[#F6E9D9] flex items-center justify-center px-6">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}

        <div className="bg-[#043222] text-[#F6E9D9] p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back
          </h1>

          <p className="mt-6 text-green-100 text-lg">
            Access your AI-powered trading dashboard and
            make smarter investment decisions.
          </p>

          <div className="mt-10 space-y-4">

            <div className="bg-[#0A4A33] p-4 rounded-xl">
              AI Trading Insights
            </div>

            <div className="bg-[#0A4A33] p-4 rounded-xl">
              Risk Assessment
            </div>

            <div className="bg-[#0A4A33] p-4 rounded-xl">
              Prediction History
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-12">

          <h2 className="text-4xl font-bold text-[#043222]">
            Login
          </h2>

          <p className="mt-2 text-gray-500">
            Enter your credentials to continue
          </p>

          <form className="mt-10 space-y-6">

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
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#043222]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#043222] text-[#F6E9D9] py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-gray-500">
            Don't have an account?
            <span className="text-[#043222] font-semibold cursor-pointer ml-2">
              Register
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;