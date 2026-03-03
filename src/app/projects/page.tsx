import SolarSystemLab from "@/components/solar-system-lab";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight">Interactive Physics Projects</h1>
        <p className="max-w-3xl text-zinc-200">
          This page is purely for interactive demos. Experience and institution-linked work live under Experience.
        </p>
      </section>

      <section className="space-y-4">
        <article className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Solar System Simulation</h2>
            <span className="glass-pill px-3 py-1 text-xs text-zinc-100">Live</span>
          </div>
          <p className="text-zinc-200">
            A stylized real-time solar system with orbital controls. Tweak speed, pause the system, and toggle orbit guides.
          </p>
          <SolarSystemLab />
        </article>
      </section>
    </div>
  );
}
