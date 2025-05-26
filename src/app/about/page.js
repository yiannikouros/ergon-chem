export default function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white">
      <div className="h-2 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400" />
      <div className="w-full px-4 sm:px-8 md:px-16 py-10">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">
          About Ergon Chem
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Ergon Chem is a leader in pharmaceutical research and development,
          committed to improving lives globally. Our mission is to deliver
          innovative solutions that advance healthcare and set new standards in
          quality and safety.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Cutting-edge R&amp;D facilities</li>
          <li>Global distribution and partnerships</li>
          <li>Commitment to sustainability and ethics</li>
          <li>Patient-focused product development</li>
        </ul>
      </div>
    </section>
  );
}