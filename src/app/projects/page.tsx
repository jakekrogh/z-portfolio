import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight">Selected Work</h1>
        <p className="max-w-2xl text-zinc-300">
          A collection of projects across applied machine learning, data products, and software engineering.
        </p>
      </section>

      <div className="space-y-5">
        {projects.map((project) => (
          <article key={project.slug} className="glass-card p-6">
            <p className="text-xs uppercase tracking-wide text-zinc-400">{project.tag}</p>
            <h2 className="mt-1 text-2xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-zinc-300">{project.summary}</p>

            <div className="mt-5 grid gap-4 text-sm text-zinc-300 sm:grid-cols-3">
              <div>
                <h3 className="mb-1 font-medium text-white">Problem</h3>
                <p>{project.problem}</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">What I built</h3>
                <p>{project.build}</p>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">Result</h3>
                <p>{project.result}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="glass-pill px-3 py-1 text-xs text-zinc-100">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
