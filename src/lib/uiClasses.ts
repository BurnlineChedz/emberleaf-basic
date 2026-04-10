/**
 * Reusable Tailwind UI class module — single source for clean black-on-white theme.
 *
 * Colors (enforced via CSS variables in globals.css):
 * --neon  : #0a0a0a  (near-black accent)
 * --black : #ffffff  (white background)
 * --white : #111111  (dark text)
 * --silver: #888888  (medium gray secondary)
 */

export const ui = {
  /** Primary button: black background, white text, subtle shadow. */
  primaryBtn:
    "neon-btn shine-hover inline-flex items-center justify-center rounded-2xl " +
    "bg-[color:var(--neon)] px-5 py-3 font-semibold text-[color:var(--black)] shadow-md " +
    "transition-all duration-200 " +
    "hover:-translate-y-1 hover:scale-[1.03] hover:bg-[color:rgba(30,30,30,1)] " +
    "focus:outline-none focus:ring-4 focus:ring-[color:var(--neon)] focus:ring-offset-2 focus:ring-offset-[color:var(--black)] " +
    "active:translate-y-0 active:scale-[0.98]",

  /** Outline button: white background, black border and text. */
  outlineBtn:
    "neon-outline shine-hover inline-flex items-center justify-center rounded-2xl " +
    "border-2 border-[color:var(--neon)] bg-[color:var(--black)] px-5 py-3 " +
    "font-semibold text-[color:var(--white)] " +
    "transition-all duration-200 " +
    "hover:-translate-y-1 hover:scale-[1.03] hover:bg-[color:var(--neon)] hover:text-[color:var(--black)] " +
    "focus:outline-none focus:ring-4 focus:ring-[color:var(--neon)] focus:ring-offset-2 focus:ring-offset-[color:var(--black)] " +
    "active:translate-y-0 active:scale-[0.98]",

  /** Clean white card with subtle border and idle float. */
  card:
    "glass-card shine-hover card-float rounded-3xl " +
    "px-6 py-6 " +
    "transition-all duration-200 " +
    "hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg hover:border-[color:var(--neon)]",

  /** Navigation link: gray text, black hover + underline. */
  navLink:
    "text-[color:var(--silver)] transition-all duration-200 hover:text-[color:var(--neon)] " +
    "hover:underline underline-offset-8 " +
    "focus:outline-none focus:ring-2 focus:ring-[color:var(--neon)] focus:ring-offset-2 focus:ring-offset-[color:var(--black)] focus:rounded",

  /** Inputs: white field with gray border, black focus ring. */
  input:
    "w-full rounded-xl border border-[color:var(--silver)] bg-[color:var(--black)] px-3 py-2 " +
    "text-[color:var(--white)] placeholder:text-[color:var(--silver)] " +
    "transition-colors duration-200 " +
    "focus:border-[color:var(--neon)] focus:outline-none focus:ring-2 focus:ring-[color:var(--neon)]",

  /** Small badge / pill for tags and counts. */
  badge:
    "inline-flex items-center justify-center rounded-full border border-[color:var(--neon)] " +
    "bg-[color:var(--neon)] px-2.5 py-0.5 text-xs font-semibold text-[color:var(--black)] " +
    "transition-all duration-200",

  /** Wrapper that adds a clean rounded container. */
  gradientBorderWrap: "gradient-border inline-block p-[1px] rounded-3xl",
} as const;
