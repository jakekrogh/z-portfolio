export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  problem: string;
  build: string;
  stack: string[];
  result: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "wpp-ml-insights",
    title: "Media Performance Modeling for Nordic Clients",
    tag: "Applied Data Science",
    summary:
      "Built data-to-insight pipelines and analytical models used to support strategic decisions for major Nordic brands.",
    problem:
      "Large organizations needed clearer, data-driven understanding of media and business performance across channels.",
    build:
      "Developed and operationalized modeling workflows, then translated technical outputs into actionable business recommendations.",
    stack: ["Python", "SQL", "Analytics", "Modeling"],
    result:
      "Improved clarity and speed of client decision-making through model-backed insights.",
    links: [
      { label: "Case Study", href: "#" },
      { label: "Repository", href: "#" },
    ],
  },
  {
    slug: "internal-ds-platform",
    title: "Internal Data Science Workflow Platform",
    tag: "MLOps / Tooling",
    summary:
      "Built an internal web app around core data science tools to reduce repetitive work and improve team reliability.",
    problem:
      "Core workflows were fragmented and manual, slowing experimentation and reuse.",
    build:
      "Designed and shipped internal software that standardized key steps in experimentation and delivery.",
    stack: ["Python", "TypeScript", "Web App", "APIs"],
    result:
      "Higher team efficiency and smoother handoff from analysis to production usage.",
    links: [
      { label: "Case Study", href: "#" },
      { label: "Repository", href: "#" },
    ],
  },
  {
    slug: "ai-agent-unstructured-data",
    title: "AI Agents for Unstructured Data Parsing",
    tag: "AI Engineering",
    summary:
      "Introduced AI agents to parse and structure unstructured datasets for downstream analysis.",
    problem:
      "Manual structuring of messy input data was time-consuming and difficult to scale.",
    build:
      "Implemented an agent-based parsing pipeline with schema-oriented outputs and reusable processing logic.",
    stack: ["LLMs", "Python", "Pydantic", "Data Pipelines"],
    result:
      "Reduced manual processing effort and made repeated workflows more scalable.",
    links: [
      { label: "Case Study", href: "#" },
      { label: "Repository", href: "#" },
    ],
  },
  {
    slug: "msc-thesis-3d-mri",
    title: "MSc Thesis: 3D MRI + CLIP-style Methodology",
    tag: "Research",
    summary:
      "Researched state-of-the-art computer vision on 3D MRI with contrastive / CLIP-inspired methods in a medical setting.",
    problem:
      "Medical imaging workflows need stronger representation learning for robust tumor-related modeling.",
    build:
      "Built training and evaluation pipelines for multimodal/3D experiments, including dataset preparation and model iteration.",
    stack: ["PyTorch", "Computer Vision", "Medical AI", "Representation Learning"],
    result:
      "Produced a strong thesis outcome and practical research foundation in applied medical AI.",
    links: [
      { label: "Thesis", href: "#" },
      { label: "Paper/Slides", href: "#" },
    ],
  },
];
