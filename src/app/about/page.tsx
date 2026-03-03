export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">About</p>
        <h1 className="text-4xl font-semibold tracking-tight">Jakob Krogh Petersen</h1>
        <p className="max-w-3xl text-zinc-300">
          Data Scientist / AI Engineer with a strong consulting focus. I partner with large Nordic clients to turn complex media and business data into decision-ready insights, then build the software and ML workflows needed to operationalize those insights.
        </p>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="mb-3 text-xl font-semibold">Experience Highlights</h2>
        <ul className="list-disc space-y-3 pl-5 text-zinc-300">
          <li>
            <span className="font-medium text-white">Data Scientist, WPP Media Denmark</span> (Feb 2025 – Present): own client-facing data science delivery for large Nordic organizations, translating media and business performance data into concrete strategic recommendations.
          </li>
          <li>
            Bridge technical and commercial stakeholders by turning model outputs into decision-ready narratives for leadership and cross-functional teams.
          </li>
          <li>
            Build internal applications and AI-powered workflow tools that improve delivery quality, speed, and repeatability across client projects.
          </li>
          <li>
            <span className="font-medium text-white">Analyst, Netcompany</span> (Jan 2022 – Jul 2024): delivered full-stack public-sector software projects with high ownership across analysis, implementation, and stakeholder collaboration.
          </li>
        </ul>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="mb-3 text-xl font-semibold">Education</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>MSc Computer Science, University of Copenhagen (2022–2024), grade: 10.29</li>
            <li>BSc Computer Science, University of Copenhagen (2019–2022), grade: 9.85</li>
            <li>Specialization in NLP, computer vision, signal/image processing, and advanced systems/programming.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="mb-3 text-xl font-semibold">Research</h2>
          <p className="text-zinc-300">
            Master’s thesis focused on state-of-the-art computer vision on 3D MRI and CLIP methodology in a 3D setting, with emphasis on practical medical AI applications.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="mb-3 text-xl font-semibold">Core Skills</h2>
        <p className="text-zinc-300">
          Machine Learning • Computer Vision • Signal Processing • Image Analysis • Applied AI • Software Development
        </p>
      </section>
    </div>
  );
}
