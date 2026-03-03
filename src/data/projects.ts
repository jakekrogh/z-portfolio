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
      "Led client-facing analytics and modeling work to support strategic media decisions for major Nordic organizations.",
    problem:
      "Large organizations needed clearer, data-driven understanding of media and business performance across channels.",
    build:
      "Built and operationalized modeling workflows, and translated technical findings into clear recommendations for both technical teams and business stakeholders.",
    stack: ["Python", "SQL", "Analytics", "Modeling"],
    result:
      "Enabled faster, more confident client decisions by making performance trade-offs and opportunities transparent.",
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
      "Built an internal data science platform that improved delivery speed and consistency on client engagements.",
    problem:
      "Core workflows were fragmented and manual, slowing experimentation and reuse.",
    build:
      "Designed and shipped internal software that standardized key steps in experimentation and delivery.",
    stack: ["Python", "TypeScript", "Web App", "APIs"],
    result:
      "Reduced operational friction in project delivery and improved handoff quality from analysis to implementation.",
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
      "Introduced AI agents that converted unstructured client data into structured inputs for analysis and reporting.",
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
