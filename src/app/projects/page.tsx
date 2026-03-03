import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight">Choose a Track</h1>
        <p className="max-w-2xl text-zinc-200">
          I split this section into professional experience and interactive physics projects.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/experience" className="glass-card p-6 transition hover:scale-[1.01]">
          <p className="mb-1 text-sm uppercase tracking-wide text-zinc-300">Track 01</p>
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <p className="mt-2 text-zinc-200">Institutions, roles, and client impact.</p>
        </Link>

        <Link href="/interactive" className="glass-card p-6 transition hover:scale-[1.01]">
          <p className="mb-1 text-sm uppercase tracking-wide text-zinc-300">Track 02</p>
          <h2 className="text-2xl font-semibold">Interactive Projects</h2>
          <p className="mt-2 text-zinc-200">Physics-based demos with visual polish.</p>
        </Link>
      </section>
    </div>
  );
}
