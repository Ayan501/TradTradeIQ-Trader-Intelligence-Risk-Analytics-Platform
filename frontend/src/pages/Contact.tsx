function Contact() {
  return (
    <div className="min-h-screen bg-[#F6E9D9] px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center">

          <h1 className="text-5xl font-bold text-[#043222]">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, suggestions, or feedback?
            We'd love to hear from you.
          </p>

        </div>

        {/* CONTENT */}

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* LEFT CARD */}

          <div className="bg-[#043222] text-[#F6E9D9] rounded-3xl p-10">

            <h2 className="text-3xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-5 text-green-100 leading-8">
              Reach out to us for support, feature requests,
              partnership opportunities, or general inquiries.
            </p>

            <div className="mt-10 space-y-6">

              <div className="bg-[#0A4A33] p-5 rounded-2xl">
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-green-100 mt-2">
                  support@traderiq.com
                </p>
              </div>

              <div className="bg-[#0A4A33] p-5 rounded-2xl">
                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-green-100 mt-2">
                  India
                </p>
              </div>

              <div className="bg-[#0A4A33] p-5 rounded-2xl">
                <h3 className="font-semibold">
                  Support Hours
                </h3>

                <p className="text-green-100 mt-2">
                  Monday - Friday | 9 AM - 6 PM
                </p>
              </div>

            </div>

          </div>

          {/* FORM */}

          <div className="bg-white rounded-3xl p-10 shadow-lg">

            <h2 className="text-3xl font-bold text-[#043222]">
              Send a Message
            </h2>

            <form className="mt-8 space-y-6">

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
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#043222]"
                />

              </div>

              <button
                type="submit"
                className="w-full bg-[#043222] text-[#F6E9D9] py-4 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;