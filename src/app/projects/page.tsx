import NBodyLab from "@/components/n-body-lab";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight">Interactive Physics Projects</h1>
        <p className="max-w-3xl text-zinc-200">
          This page is purely for interactive demos. Experience and institution-linked work now live under Experience.
        </p>
      </section>

      <section className="space-y-4">
        <article className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">N-Body Gravity Sandbox</h2>
            <span className="glass-pill px-3 py-1 text-xs text-zinc-100">Live</span>
          </div>
          <p className="text-zinc-200">
            Explore emergent orbital behavior with adjustable body count, pause/resume controls, and reseeding.
          </p>
          <NBodyLab />
        </article>
      </section>
    </div>
  );
}
