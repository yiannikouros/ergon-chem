export default function HomePage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white">
      {/* Accent bar */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400" />
      <div className="w-full py-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight">
          Welcome to Ergon Chem
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Innovative Pharmaceutical Solutions for a Healthier World
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">Research</h2>
            <p className="text-gray-600">
              Advancing healthcare through cutting-edge research and next-generation therapies.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">Products</h2>
            <p className="text-gray-600">
              High-quality, patient-focused pharmaceutical products trusted worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}