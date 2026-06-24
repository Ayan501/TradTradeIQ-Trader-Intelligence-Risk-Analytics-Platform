import { Link } from "react-router-dom";

function Navbar() {
  return (
<nav className="bg-[#043222] border border-green-900 rounded-3xl mx-5 mt-4 shadow-lg">      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-extrabold text-[#F6E9D9] tracking-wide">

            TraderIQ
          </h1>
          <p className="text-xs text-green-200">
            AI Trading Intelligence
          </p>
        </div>

       <div className="hidden md:flex gap-8 text-[#F6E9D9] font-semibold text-lg">
          <Link to="/">Home</Link>
          <Link to="/assistant">AI Assistant</Link>
          <Link to="/history">History</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="border border-[#F6E9D9] text-[#F6E9D9] px-5 py-2 rounded-xl"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-[#F6E9D9] text-[#043222] px-5 py-2 rounded-xl font-semibold"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;