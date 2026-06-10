export interface Project {
  url: string;
  note: string;
  title: string;
  year: number;
}

export const projects = [
  {
    url: "https://github.com/joepetrillo/personal-site",
    note: "A small, durable website for all my stuff. Powered by Astro.",
    title: "Personal Site",
    year: 2026,
  },
  {
    url: "https://pinbound.golf",
    note: "Find and book golf lessons near you. For all skill levels.",
    title: "Pinbound",
    year: 2026,
  },
  {
    url: "https://tarkov.directory",
    note: "Escape from Tarkov gun modding on the web. Updates daily.",
    title: "Tarkov Directory",
    year: 2025,
  },
  {
    url: "https://www.citizensbankonline.com/",
    note: "Online banking for Citizens Bank customers. Microfrontend architecture.",
    title: "Citizens Online Banking",
    year: 2024,
  },
  {
    url: "https://github.com/jackbisceglia/apptrack",
    note: "Internship opening sent to your email inbox.",
    title: "AppTrack",
    year: 2022,
  },
] satisfies Project[];
