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
    slug: "ml-workflow-app",
    title: "Internal ML Workflow App",
    tag: "MLOps",
    summary: "Built an internal app to streamline experimentation, reuse, and deployment for data science teams.",
    problem: "Manual and fragmented workflows slowed down model development and made collaboration harder.",
    build: "Designed and developed a full-stack internal platform around core data science workflows.",
    stack: ["Python", "TypeScript", "React", "FastAPI", "Docker"],
    result: "Improved team throughput and reduced time spent on repetitive setup work.",
    links: [
      { label: "Case Study", href: "#" },
      { label: "Repository", href: "#" },
    ],
  },
  {
    slug: "unstructured-data-agent",
    title: "Unstructured Data Parsing Agent",
    tag: "Applied AI",
    summary: "Implemented an AI-driven agent to parse and structure unstructured data for downstream analytics.",
    problem: "Teams spent significant manual effort converting messy inputs into structured formats.",
    build: "Created an agent-based parsing pipeline with validation and standardized output schemas.",
    stack: ["LLMs", "Python", "Pydantic", "APIs"],
    result: "Reduced manual processing time and improved scalability across repeated tasks.",
    links: [
      { label: "Case Study", href: "#" },
      { label: "Repository", href: "#" },
    ],
  },
  {
    slug: "multimodal-mri-thesis",
    title: "Multimodal MRI + Text Thesis",
    tag: "Research",
    summary: "Master’s thesis on contrastive pre-training using 3D MRI scans and clinical text to localize brain tumors.",
    problem: "Needed stronger representations across imaging and clinical language for localization performance.",
    build: "Built non-trivial data pipelines and trained/evaluated state-of-the-art multimodal models.",
    stack: ["PyTorch", "Medical Imaging", "Contrastive Learning", "NLP"],
    result: "Accepted as scientific article at ISBI 2025 (Houston).",
    links: [
      { label: "Paper", href: "#" },
      { label: "Slides", href: "#" },
    ],
  },
];
