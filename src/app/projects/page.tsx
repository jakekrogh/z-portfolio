import NBodyLab from "@/components/n-body-lab";
import { experiences } from "@/data/experience";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Experience</p>
        <h1 className="text-4xl font-semibold tracking-tight">Institutions, Roles & Interactive Work</h1>
        <p className="max-w-3xl text-zinc-200">
          This section ties practical experience to real institutions and showcases interactive projects that demonstrate how I build applied systems, not just static case studies.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Professional Experience</h2>
        <div className="space-y-4">
          {experiences.map((item) => (
            <article key={`${item.institution}-${item.role}`} className="glass-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <span className="glass-pill px-3 py-1 text-xs text-zinc-100">{item.period}</span>
              </div>
              <p className="mt-1 text-zinc-100">{item.institution}</p>
              {item.location && <p className="text-sm text-zinc-300">{item.location}</p>}

              <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-200">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Physics Projects</h2>
        <p className="max-w-3xl text-zinc-200">
          A visual lab section for interactive simulations. First demo is live below.
        </p>

        <article className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">N-Body Gravity Sandbox</h3>
            <span className="glass-pill px-3 py-1 text-xs text-zinc-100">Real-time simulation</span>
          </div>
          <p className="text-zinc-200">
            Explore emergent orbital behavior with adjustable body count, pause/resume controls, and reseeding. Built to showcase numerical simulation + interaction design.
          </p>
          <NBodyLab />
        </article>
      </section>
    </div>
  );
}
