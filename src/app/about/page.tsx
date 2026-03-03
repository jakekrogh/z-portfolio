export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">About</p>
        <h1 className="text-4xl font-semibold tracking-tight">Jakob Krogh Petersen</h1>
        <p className="max-w-3xl text-zinc-300">
          Data Scientist / AI Engineer with a computer science background and a strong focus on applied AI, machine learning, and computer vision. I build end-to-end systems that combine modeling, software engineering, and consulting to solve real business problems.
        </p>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="mb-3 text-xl font-semibold">Experience Highlights</h2>
        <ul className="list-disc space-y-3 pl-5 text-zinc-300">
          <li>
            <span className="font-medium text-white">Data Scientist, WPP Media Denmark</span> (Feb 2025 – Present): translate data into models and models into insights for large Nordic clients; build internal tooling and AI-driven workflow improvements.
          </li>
          <li>
            Developed internal software around core data science tools and introduced AI agents to parse unstructured datasets.
          </li>
          <li>
            <span className="font-medium text-white">Analyst, Netcompany</span> (Jan 2022 – Jul 2024): worked across full-stack project delivery, from analysis to implementation, while taking increasing responsibility in software project execution.
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
