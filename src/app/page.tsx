import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Portfolio</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Data scientist building production-grade ML and software systems.
        </h1>
        <p className="max-w-2xl text-zinc-300">
          I work at the intersection of machine learning, analytics, and software engineering—turning advanced methods into tools that create measurable business impact.
        </p>
        <div className="flex gap-3">
          <Link href="/projects" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200">
            View Projects
          </Link>
          <Link href="/about" className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium transition hover:border-zinc-500">
            About Me
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-zinc-300 underline-offset-4 hover:underline">
            See all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <article key={project.slug} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
              <p className="mb-2 text-xs uppercase tracking-wide text-zinc-400">{project.tag}</p>
              <h3 className="mb-2 text-lg font-medium">{project.title}</h3>
              <p className="text-sm text-zinc-300">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
