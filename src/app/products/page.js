export default function ProductsPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white">
      <div className="h-2 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400" />
      <div className="w-full px-4 sm:px-8 md:px-16 py-10">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">
          Our Products
        </h1>
        <ul className="divide-y divide-blue-50">
          <li className="py-4">
            <span className="font-semibold text-blue-700">Product A</span>
            <p className="text-gray-600 text-sm">A breakthrough therapy for chronic conditions.</p>
          </li>
          <li className="py-4">
            <span className="font-semibold text-blue-700">Product B</span>
            <p className="text-gray-600 text-sm">Advanced formulation for improved patient outcomes.</p>
          </li>
          <li className="py-4">
            <span className="font-semibold text-blue-700">Product C</span>
            <p className="text-gray-600 text-sm">Trusted by healthcare professionals worldwide.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}