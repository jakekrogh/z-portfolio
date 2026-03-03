import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Experience</p>
        <h1 className="text-4xl font-semibold tracking-tight">Institutions & Roles</h1>
        <p className="max-w-3xl text-zinc-200">
          Client-facing and engineering experience across consulting, analytics, and applied AI.
        </p>
      </section>

      <section className="space-y-4">
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
    </div>
  );
}
