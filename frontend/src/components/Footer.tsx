import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#043222] text-[#F6E9D9] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}

          <div>

            <h2 className="text-3xl font-bold">
              TraderIQ
            </h2>

            <p className="mt-4 text-green-100 leading-7">
              AI-powered trading intelligence platform
              designed to help traders make smarter
              and data-driven decisions.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-green-100 hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/assistant"
                  className="text-green-100 hover:text-white"
                >
                  AI Assistant
                </Link>
              </li>

              <li>
                <Link
                  to="/history"
                  className="text-green-100 hover:text-white"
                >
                  History
                </Link>
              </li>

            </ul>

          </div>

          {/* COMPANY */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/about"
                  className="text-green-100 hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-green-100 hover:text-white"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-green-100">
              support@traderiq.com
            </p>

            <p className="text-green-100 mt-3">
              India
            </p>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="border-t border-green-900 mt-10 pt-6 text-center">

          <p className="text-green-200">
            © 2026 TraderIQ. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;