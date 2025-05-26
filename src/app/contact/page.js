export default function ContactPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white">
      <div className="h-2 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400" />
      <div className="w-full px-4 sm:px-8 md:px-16 py-10">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">
          Contact Us
        </h1>
        <form className="space-y-6 max-w-xl mx-auto">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">Message</label>
            <textarea
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}