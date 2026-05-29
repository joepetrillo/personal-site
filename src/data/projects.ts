export interface Project {
  githubUrl: string;
  liveUrl?: string;
  note: string;
  title: string;
  year: number;
}

export const projects = [
  {
    githubUrl: "https://github.com/joepetrillo/personal-site",
    liveUrl: "https://joepetrillo.com",
    note: "A small, durable home for my writing, projects, and links.",
    title: "Personal Site",
    year: 2026,
  },
  {
    githubUrl: "https://github.com/joepetrillo/pinbound",
    note: "A focused tool for collecting and revisiting useful links.",
    title: "Pinbound",
    year: 2026,
  },
  {
    githubUrl: "https://github.com/joepetrillo/experiments",
    note: "Small software experiments, notes, and learning projects.",
    title: "Experiments",
    year: 2025,
  },
] satisfies Project[];
