import { experiences } from "@/data/experience";

type ExperienceProject = {
  title: string;
  institution: string;
  type: "Work" | "Study";
  summary: string;
  impact: string;
};

const experienceProjects: ExperienceProject[] = [
  {
    title: "Client-Facing Media Performance Modeling",
    institution: "WPP Media Denmark (Choreograph)",
    type: "Work",
    summary:
      "Built and delivered analytical/modeling workflows for large Nordic organizations to improve media and business decisions.",
    impact:
      "Enabled clearer trade-off decisions and faster strategic alignment between marketing and leadership teams.",
  },
  {
    title: "Internal AI Workflow Tooling",
    institution: "WPP Media Denmark (Choreograph)",
    type: "Work",
    summary:
      "Developed internal software and AI-assisted parsing flows to reduce manual handling of unstructured data.",
    impact:
      "Improved delivery speed and repeatability across client engagements.",
  },
  {
    title: "Public-Sector Software Delivery",
    institution: "Netcompany",
    type: "Work",
    summary:
      "Contributed across the software lifecycle in full-stack project environments with high ownership.",
    impact:
      "Strengthened execution across analysis, implementation, and stakeholder collaboration.",
  },
  {
    title: "MSc Thesis: 3D MRI + CLIP-Style Methods",
    institution: "University of Copenhagen",
    type: "Study",
    summary:
      "Explored state-of-the-art computer vision on 3D MRI with contrastive/multimodal methodology in a medical context.",
    impact:
      "Built a strong research and engineering foundation for applied ML in high-complexity domains.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Experience</p>
        <h1 className="text-4xl font-semibold tracking-tight">Work & Study Experience</h1>
        <p className="max-w-3xl text-zinc-200">
          Professional roles and study-based projects presented as experience cards tied to institutions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Role Timeline</h2>
        <div className="space-y-4">
          {experiences.map((item) => (
            <article key={`${item.institution}-${item.role}`} className="glass-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <span className="glass-pill px-3 py-1 text-xs text-zinc-100">{item.period}</span>
              </div>
              <p className="mt-1 text-zinc-100">{item.institution}</p>
              {item.location && <p className="text-sm text-zinc-300">{item.location}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience Cards</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {experienceProjects.map((project) => (
            <article key={project.title} className="glass-card p-6">
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="text-sm text-zinc-300">{project.institution}</p>
                <span className="glass-pill px-2.5 py-1 text-xs text-zinc-100">{project.type}</span>
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-zinc-200">{project.summary}</p>
              <p className="mt-3 text-sm text-zinc-300">
                <span className="font-medium text-zinc-100">Impact:</span> {project.impact}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
