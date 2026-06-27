import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/login", form);

      alert(response.data.message);

      if (response.data.message === "Login Successful") {

        localStorage.setItem(
          "user_id",
          response.data.user_id.toString()
        );

        localStorage.setItem(
          "user_name",
          response.data.name
        );

        localStorage.setItem(
          "user_email",
          response.data.email
        );

        navigate("/assistant");
      }

    } catch (err: any) {

      if (err.response) {
        alert(err.response.data.detail || err.response.data.message);
      } else {
        alert("Server Error");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6E9D9] flex items-center justify-center px-6">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT */}

        <div className="bg-[#043222] text-[#F6E9D9] p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back
          </h1>

          <p className="mt-6 text-green-100 text-lg">
            Access your AI-powered trading dashboard and make smarter investment decisions.
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

        {/* RIGHT */}

        <div className="p-12">

          <h2 className="text-4xl font-bold text-[#043222]">
            Login
          </h2>

          <p className="mt-2 text-gray-500">
            Enter your credentials to continue
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-10 space-y-6"
          >

            <div>

              <label className="block mb-2 font-medium text-[#043222]">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#043222]"
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-medium text-[#043222]">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#043222]"
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#043222] text-[#F6E9D9] py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="mt-6 text-center text-gray-500">

            Don't have an account?

            <Link
              to="/register"
              className="text-[#043222] font-semibold ml-2 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;