export type ExperienceItem = {
  institution: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    institution: "WPP Media Denmark (Choreograph)",
    role: "Data Scientist",
    period: "Feb 2025 – Present",
    location: "Copenhagen",
    highlights: [
      "Lead client-facing modeling and analytics delivery for large Nordic organizations.",
      "Translate technical findings into decision-ready recommendations for business stakeholders.",
      "Build internal ML/AI tooling that improves delivery speed and repeatability across engagements.",
    ],
  },
  {
    institution: "Netcompany",
    role: "Analyst",
    period: "Jan 2022 – Jul 2024",
    location: "Copenhagen",
    highlights: [
      "Delivered full-stack software solutions across analysis, implementation, and deployment.",
      "Worked in high-responsibility project environments with technical and non-technical stakeholders.",
      "Built practical systems thinking around reliability, maintainability, and lifecycle ownership.",
    ],
  },
  {
    institution: "University of Copenhagen",
    role: "MSc Computer Science",
    period: "2022 – 2024",
    location: "Copenhagen",
    highlights: [
      "Specialized in machine learning, medical AI, and signal processing.",
      "Thesis: state-of-the-art computer vision on 3D MRI with CLIP-style methodology.",
      "Built strong foundation in research rigor and production-minded engineering.",
    ],
  },
];
