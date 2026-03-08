/**
 * Portfolio projects — edit this array to change the list on /portfolio.
 * Each project: title, description (short), and link (URL for the button).
 */
export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Weather App",
    description: "Real-time weather with forecasts and maps.",
    link: "https://example.com/weather",
  },
  {
    id: "2",
    title: "Task Manager",
    description: "Track tasks and deadlines with a simple UI.",
    link: "https://example.com/tasks",
  },
  {
    id: "3",
    title: "Blog Platform",
    description: "Write and publish posts with markdown support.",
    link: "https://example.com/blog",
  },
  {
    id: "4",
    title: "Recipe Finder",
    description: "Search recipes by ingredient or cuisine.",
    link: "https://example.com/recipes",
  },
  {
    id: "5",
    title: "Expense Tracker",
    description: "Log spending and view monthly summaries.",
    link: "https://example.com/expenses",
  },
  {
    id: "6",
    title: "Portfolio Site",
    description: "Showcase projects and contact info.",
    link: "https://example.com/portfolio",
  },
];
