/**
 * Portfolio projects — edit this array to change the list on /portfolio.
 * Each project: title, description, tags, and link (URL for the button).
 */
export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Emberleaf Store",
    description:
      "This storefront — a neon cyberpunk e-commerce experience built with Next.js, Stripe, and Framer Motion.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    link: "/",
  },
  {
    id: "2",
    title: "Weather Dashboard",
    description:
      "Real-time weather app with 7-day forecasts, radar maps, and location-based alerts. Pulls from Open-Meteo.",
    tags: ["React", "API", "Charts"],
    link: "https://example.com/weather",
  },
  {
    id: "3",
    title: "Task Flow",
    description:
      "Kanban-style task manager with drag-and-drop boards, due dates, and priority labels. Data persists via localStorage.",
    tags: ["React", "DnD", "TypeScript"],
    link: "https://example.com/taskflow",
  },
  {
    id: "4",
    title: "Markdown Blog",
    description:
      "Static blog platform that renders MDX files with syntax highlighting, reading time, and an RSS feed.",
    tags: ["Next.js", "MDX", "SSG"],
    link: "https://example.com/blog",
  },
  {
    id: "5",
    title: "Palette Studio",
    description:
      "Browser-based color palette generator with harmony modes, contrast checking, and one-click CSS export.",
    tags: ["Canvas API", "TypeScript", "CSS"],
    link: "https://example.com/palette",
  },
  {
    id: "6",
    title: "Budget Lens",
    description:
      "Personal finance tracker that categorizes spending, visualizes trends, and exports monthly PDF reports.",
    tags: ["React", "Chart.js", "PDF"],
    link: "https://example.com/budget",
  },
];
