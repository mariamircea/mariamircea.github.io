export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  note?: string;
};

export const profile = {
  name: "Maria Mircea, PhD",
  title: "Machine Learning for Precision Medicine",
  roles: [
    "Scientist",
    "Computational Biology",
    "Graph Machine Learning",
    "Cancer Immunotherapy",
  ],
  introduction:
    "I develop machine learning methods for biological discovery and precision medicine, with a focus on graph representation learning, scientific machine learning, and interpretable systems for oncology.",
  email: "hello@mariamircea.com",
  cvHref: "/maria-mircea-cv.pdf",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Publications", href: "/publications" },
  { label: "CV", href: "/cv" },
];

export const externalLinks: LinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Publications", href: "/publications" },
  { label: "CV", href: profile.cvHref },
];

export const biography = [
  "Maria Mircea is a machine learning scientist working at the intersection of computational biology, graph learning, and precision medicine.",
  "Her research focuses on building robust, interpretable models that connect molecular data, biomedical knowledge, and clinical questions in oncology.",
];

export const education = [
  "PhD, Machine Learning and Computational Biology",
  "Graduate training in graph-based learning, biomedical data integration, and scientific computing",
];

export const currentPosition =
  "Scientist working on machine learning methods for precision medicine and cancer immunotherapy.";

export const researchInterests = [
  "Graph representation learning for biological systems",
  "Knowledge graphs and biomedical reasoning",
  "Scientific machine learning for high-dimensional molecular data",
  "Virtual patient modeling and treatment response prediction",
  "Explainable AI for translational oncology",
];

export const publications: Publication[] = [
  {
    title:
      "Graph machine learning for precision oncology: methods and translational opportunities",
    authors: "Maria Mircea et al.",
    venue: "Manuscript in preparation",
    year: "2026",
    note: "Placeholder entry",
  },
  {
    title:
      "Knowledge-guided representation learning for cancer immunotherapy response modeling",
    authors: "Maria Mircea et al.",
    venue: "Preprint forthcoming",
    year: "2026",
    note: "Placeholder entry",
  },
  {
    title:
      "Scientific machine learning for virtual patient modeling in translational medicine",
    authors: "Maria Mircea et al.",
    venue: "Conference submission",
    year: "2025",
    note: "Placeholder entry",
  },
];
