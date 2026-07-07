export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type PublicationTheme =
  | "Machine Learning"
  | "Biomedical Data"
  | "Biological Knowledge";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  details?: string;
  linkLabel: string;
  href: string;
  themes: PublicationTheme[];
};

export type CvEntry = {
  title: string;
  organization: string;
  location: string;
  dates: string;
  tags?: string[];
};

export const profile = {
  name: "Maria Mircea, PhD",
  title: "Knowledge-Guided AI for Precision Medicine",
  roles: [
    "Computational Biology",
    "Cancer Immunotherapy",
    "Omics Analysis"
  ],
  introduction:
    "Combining machine learning, biological knowledge, and biomedical data to build interpretable computational approaches for biomedical discovery.",
  email: "hello@mariamircea.com",
  cvHref: "/cv",
  googleScholarHref: "https://scholar.google.com/citations?user=P8f0BhgAAAAJ&hl=en",
  linkedInHref: "https://www.linkedin.com/in/maria-mircea-736a5818b/",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Publications", href: "/publications" },
  { label: "CV", href: "/cv" },
];

export const externalLinks: LinkItem[] = [
  { label: "Publications", href: "/publications" },
  { label: "CV", href: profile.cvHref },
  { label: "Google Scholar", href: profile.googleScholarHref },
  { label: "LinkedIn", href: profile.linkedInHref },
];

export const publicationThemes: PublicationTheme[] = [
  "Machine Learning",
  "Biomedical Data",
  "Biological Knowledge",
];

export const experience: CvEntry[] = [
  {
    title: "Scientist, BioAI - Bioinformatics R&D",
    organization: "BioNTech",
    location: "Mainz, Germany",
    dates: "09/2024 - Present",
    tags: ["personalized cancer vaccines", "immunogenicity", "AI workflows"],
  },
  {
    title: "Postdoctoral Researcher - Computational Biology",
    organization: "University of Bonn",
    location: "Bonn, Germany",
    dates: "10/2022 - 08/2024",
    tags: ["scientific ML", "multi-omics", "BATenergy SFB"],
  },
  {
    title: "PhD Candidate - Biophysics",
    organization: "Leiden University",
    location: "Leiden, Netherlands",
    dates: "04/2018 - 09/2022",
    tags: ["single-cell transcriptomics", "phiclust", "gene regulatory networks"],
  },
];

export const education: CvEntry[] = [
  {
    title: "MSc Mathematics, Minor in Biology",
    organization: "Technical University Munich",
    location: "Munich, Germany",
    dates: "2015 - 2018",
    tags: ["Helmholtz Munich", "Fabian Theis Lab"],
  },
  {
    title: "BSc Mathematics, Minor in Economics",
    organization: "Technical University Munich",
    location: "Munich, Germany",
    dates: "2012 - 2015",
    tags: ["National University of Colombia", "Helmholtz Munich"],
  },
];

export const publications: Publication[] = [
  {
    year: "2026",
    title:
      "From brown to white: Brown adipose tissue endothelial cells whiten in culture conditions",
    authors:
      "Tabea Elschner, Stephan Grein, Jana Sander, Staffan Hildebrand, Lara Heubach, Nina Pannwitz, Maria Mircea et al.",
    venue: "Molecular Metabolism",
    details: "107:102349",
    linkLabel: "doi.org/10.1016/j.molmet.2026.102349",
    href: "https://doi.org/10.1016/j.molmet.2026.102349",
    themes: ["Biomedical Data", "Biological Knowledge"],
  },
  {
    year: "2025",
    title:
      "Tissue microenvironment dictates the state of human iPSC-derived endothelial cells of distinct developmental origin in 3D cardiac microtissues",
    authors:
      "Xu Cao, Maria Mircea, Sara Cascione, Atoosa Amel, Theano Tsikari, Francijna E van den Hil, Hailiang Mei, Katrin Neumann, Anna Alemany, Konstantinos Anastassiadis, Christine L Mummery, Stefan Semrau, Valeria V Orlova",
    venue: "iScience",
    details: "28(10)",
    linkLabel: "doi.org/10.1016/j.isci.2025.113611",
    href: "https://doi.org/10.1016/j.isci.2025.113611",
    themes: ["Biomedical Data", "Biological Knowledge"],
  },
  {
    year: "2024",
    title:
      "The shapes of elongating gastruloids are consistent with convergent extension",
    authors:
      "Martijn A de Jong, Esmée Adegeest, Noémie MLP Bérenger-Currias, Maria Mircea et al.",
    venue: "PLOS Computational Biology",
    linkLabel: "doi.org/10.1371/journal.pcbi.1011825",
    href: "https://doi.org/10.1371/journal.pcbi.1011825",
    themes: ["Biomedical Data", "Biological Knowledge"],
  },
  {
    year: "2024",
    title:
      "Inference of dynamical gene regulatory networks from single-cell data with physics informed neural networks",
    authors: "Maria Mircea, Diego Garlaschelli, Stefan Semrau",
    venue: "bioRxiv",
    linkLabel: "arXiv:2401.07379",
    href: "https://arxiv.org/abs/2401.07379v1",
    themes: ["Machine Learning", "Biomedical Data", "Biological Knowledge"],
  },
  {
    year: "2022",
    title:
      "ETV2 Upregulation Marks the Specification of Early Cardiomyocytes and Endothelial Cells",
    authors: "Xu Cao, Maria Mircea et al.",
    venue: "Stem Cells",
    linkLabel: "doi.org/10.1093/stmcls/sxac086",
    href: "https://doi.org/10.1093/stmcls/sxac086",
    themes: ["Biomedical Data", "Biological Knowledge"],
  },
  {
    year: "2022",
    title:
      "A gastruloid model of embryonic and extra-embryonic cell type interaction",
    authors: "Noémie Bérenger-Currias, Maria Mircea et al.",
    venue: "Journal of Tissue Engineering",
    linkLabel: "doi.org/10.1177/20417314221103042",
    href: "https://doi.org/10.1177/20417314221103042",
    themes: ["Biomedical Data", "Biological Knowledge"],
  },
  {
    year: "2021",
    title:
      "Phiclust: a clusterability measure for single-cell transcriptomics reveals phenotypic subpopulations",
    authors:
      "Maria Mircea, Mazène Hochane, Xueying Fan, Susana M. Chuva De Sousa Lopes, Diego Garlaschelli, Stefan Semrau",
    venue: "Genome Biology",
    linkLabel: "doi.org/10.1186/s13059-021-02590-x",
    href: "https://doi.org/10.1186/s13059-021-02590-x",
    themes: ["Machine Learning", "Biomedical Data"],
  },
  {
    year: "2021",
    title: "How a cell decides its own fate",
    authors: "Maria Mircea, Stefan Semrau",
    venue: "Biochemical Society Transactions",
    linkLabel: "doi.org/10.1042/BST20210135",
    href: "https://doi.org/10.1042/BST20210135",
    themes: ["Biological Knowledge"],
  },
  {
    year: "2020",
    title:
      "Human-iPSC-Derived Cardiac Stromal Cells Enhance Maturation in 3D Cardiac Microtissues",
    authors:
      "Elisa Giacomelli, Viviana Meraviglia, Giulia Campostrini, Amy Cochrane, Xu Cao, Ruben W.J. van Helden, Ana Krotenberg Garcia, Maria Mircea et al.",
    venue: "Cell Stem Cell",
    details: "26:862-879",
    linkLabel: "doi.org/10.1016/j.stem.2020.05.004",
    href: "https://doi.org/10.1016/j.stem.2020.05.004",
    themes: ["Biomedical Data", "Biological Knowledge"],
  },
  {
    year: "2019",
    title: "Single-cell RNA-seq denoising using a deep count autoencoder",
    authors:
      "Gökcen Eraslan, Lukas M. Simon, Maria Mircea, Nikola S. Mueller, Fabian J. Theis",
    venue: "Nature Communications",
    details: "10:390",
    linkLabel: "doi.org/10.1038/s41467-018-07931-2",
    href: "https://doi.org/10.1038/s41467-018-07931-2",
    themes: ["Machine Learning", "Biomedical Data"],
  },
  {
    year: "2018",
    title: "Galois lattice and positional dominance",
    authors: "Maria Mircea, Jürgen Pfeffer",
    venue: "Statistica Applicata - Italian Journal of Applied Statistics",
    details: "11-31",
    linkLabel: "Google Scholar",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=P8f0BhgAAAAJ&citation_for_view=P8f0BhgAAAAJ:u-x6o8ySG0sC",
    themes: ["Machine Learning"],
  },
];
