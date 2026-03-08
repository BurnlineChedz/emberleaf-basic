/**
 * Reusable Tailwind UI class module — single source for NEON GREEN theme and flashy hovers.
 *
 * Colors (enforced via CSS variables in globals.css):
 * --neon  : #39FF14
 * --black : #050505
 * --white : #ffffff
 * --silver: #bfc5c9
 */

export const ui = {
  /** Primary neon button: neon on black, strong glow, lift + scale on hover. */
  primaryBtn:
    "neon-btn shine-hover inline-flex items-center justify-center rounded-2xl " +
    "bg-[color:var(--neon)] px-5 py-3 font-semibold text-[color:var(--black)] shadow-md " +
    "transition-all duration-200 " +
    "hover:-translate-y-1 hover:scale-[1.03] " +
    "focus:outline-none focus:ring-4 focus:ring-[color:var(--neon)] focus:ring-offset-2 focus:ring-offset-[color:var(--black)] " +
    "active:translate-y-0 active:scale-[0.98]",

  /** Outline button: black background, silver border, neon hover glow. */
  outlineBtn:
    "neon-outline shine-hover inline-flex items-center justify-center rounded-2xl " +
    "border-2 border-[color:var(--silver)] bg-[color:var(--black)] px-5 py-3 " +
    "font-semibold text-[color:var(--white)] " +
    "transition-all duration-200 " +
    "hover:-translate-y-1 hover:scale-[1.03] " +
    "focus:outline-none focus:ring-4 focus:ring-[color:var(--silver)] focus:ring-offset-2 focus:ring-offset-[color:var(--black)] " +
    "active:translate-y-0 active:scale-[0.98]",

  /** Glassmorphism cyber card with subtle idle float and neon hover border. */
  card:
    "glass-card shine-hover card-float rounded-3xl border border-[color:rgba(191,197,201,0.55)] " +
    "bg-[color:rgba(255,255,255,0.06)] px-6 py-6 shadow-sm " +
    "transition-all duration-200 " +
    "hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:border-[color:var(--neon)]",

  /** Navigation link: silver/white text, neon hover + underline + focus ring. */
  navLink:
    "text-[color:var(--silver)] transition-all duration-200 hover:text-[color:var(--neon)] " +
    "hover:underline underline-offset-8 " +
    "focus:outline-none focus:ring-2 focus:ring-[color:var(--neon)] focus:ring-offset-2 focus:ring-offset-[color:var(--black)] focus:rounded",

  /** Inputs: dark field with silver border, neon focus ring. */
  input:
    "w-full rounded-xl border border-[color:var(--silver)] bg-[color:rgba(5,5,5,0.92)] px-3 py-2 " +
    "text-[color:var(--white)] placeholder:text-[color:rgba(191,197,201,0.75)] " +
    "transition-colors duration-200 " +
    "focus:border-[color:var(--neon)] focus:outline-none focus:ring-2 focus:ring-[color:var(--neon)]",

  /** Small badge / pill for counts. */
  badge:
    "inline-flex items-center justify-center rounded-full border border-[color:var(--silver)] " +
    "bg-[color:rgba(57,255,20,0.12)] px-2.5 py-0.5 text-xs font-semibold text-[color:var(--neon)] " +
    "transition-all duration-200",

  /** Wrapper that adds animated neon gradient border using masking trick (see globals.css). */
  gradientBorderWrap: "gradient-border inline-block p-[1px] rounded-3xl",
} as const;

