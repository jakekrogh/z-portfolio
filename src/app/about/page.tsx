export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">About</p>
        <h1 className="text-4xl font-semibold tracking-tight">Jakob Krogh Petersen</h1>
        <p className="max-w-2xl text-zinc-300">
          Data Scientist with a background in applied machine learning and software engineering. I build end-to-end systems that turn advanced models into practical tools for decision-making and business impact.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="mb-3 text-xl font-semibold">Current Focus</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>Production-ready ML workflows</li>
            <li>AI-driven tooling for unstructured data</li>
            <li>Bridging analytics, software, and strategy</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="mb-3 text-xl font-semibold">Background</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>MSc Computer Science, University of Copenhagen</li>
            <li>Specialization in ML, medical AI, signal processing</li>
            <li>Article accepted at ISBI 2025 (Houston)</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="mb-3 text-xl font-semibold">Contact</h2>
        <p className="text-zinc-300">Copenhagen, Denmark</p>
        <p className="text-zinc-300">jakob231198@gmail.com</p>
        <p className="mt-3 text-sm text-zinc-400">
          Add LinkedIn and GitHub links here when ready.
        </p>
      </section>
    </div>
  );
}
