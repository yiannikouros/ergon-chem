export default function ResearchPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white">
      <div className="h-2 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400" />
      <div className="w-full px-4 sm:px-8 md:px-16 py-10">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">
          Research & Innovation
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our research team is dedicated to discovering new therapies and improving patient care through innovation and collaboration.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>State-of-the-art laboratories and technology</li>
          <li>Collaborations with leading institutions</li>
          <li>Focus on safety, efficacy, and quality</li>
          <li>Continuous investment in R&amp;D</li>
        </ul>
      </div>
    </section>
  );
}