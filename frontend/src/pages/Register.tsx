import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/register", form);

      alert(response.data.message);

      if (response.data.message === "User Registered Successfully") {
        navigate("/login");
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

        {/* RIGHT */}

        <div className="p-12">

          <h2 className="text-4xl font-bold text-[#043222]">
            Register
          </h2>

          <p className="mt-2 text-gray-500">
            Create your account to get started
          </p>

          <form
            onSubmit={handleRegister}
            className="mt-8 space-y-5"
          >

            <div>

              <label className="block mb-2 font-medium text-[#043222]">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#043222]"
                required
              />

            </div>

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
                placeholder="Create password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#043222]"
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#043222] text-[#F6E9D9] py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>

          <p className="mt-6 text-center text-gray-500">

            Already have an account?

            <Link
              to="/login"
              className="text-[#043222] font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;