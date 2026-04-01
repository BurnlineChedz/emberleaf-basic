# CLAUDE.md — AI Assistant Guide for emberleaf-basic

## Project Overview

**Type**: E-commerce storefront with portfolio showcase
**Stack**: Next.js 16 (App Router) + React 19 + TypeScript 5 + Tailwind CSS 4 + Framer Motion + Stripe

A single-product store selling a 40oz Tumbler, featuring a shopping cart, Stripe checkout, and a portfolio showcase page — all styled with a neon cyberpunk / glassmorphism aesthetic.

---

## Development Commands

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build (outputs to .next/)
npm start       # Run production server
npm run lint    # Run ESLint
```

No test framework is configured. There are no pre-commit hooks.

---

## Repository Structure

```
/
├── app/                          # Next.js App Router (pages + API routes)
│   ├── api/
│   │   └── create-checkout-session/route.ts   # POST: Stripe checkout
│   ├── cart/page.tsx             # Cart view
│   ├── checkout/page.tsx         # Checkout form (calls Stripe)
│   ├── portfolio/page.tsx        # Portfolio showcase
│   ├── product/page.tsx          # Product detail + add-to-cart
│   ├── success/page.tsx          # Post-purchase confirmation
│   ├── layout.tsx                # Root server layout (metadata, fonts)
│   ├── page.tsx                  # Home / hero page
│   └── globals.css               # Tailwind + CSS variables + animations
├── components/                   # Root-level client components
│   ├── ClientLayout.tsx          # Wraps app with CartProvider, Nav, CursorGlow
│   └── Nav.tsx                   # Navigation bar with animated cart badge
├── context/
│   └── CartContext.tsx           # Cart state via React Context + useReducer
├── lib/
│   ├── products.ts               # Product data (single product, hardcoded)
│   └── portfolio.ts              # Portfolio project data (6 projects, hardcoded)
├── src/
│   ├── components/
│   │   ├── ParallaxHero.tsx      # Pointer-tracked 3D perspective tilt
│   │   └── CursorGlow.tsx        # Mouse-following radial gradient overlay
│   └── lib/
│       └── uiClasses.ts          # Centralized Tailwind class string constants
└── public/                       # Static SVG assets
```

---

## Architecture Decisions

### Server vs. Client Components
- `app/layout.tsx` is a **server component** (default; no directive). It handles metadata and imports fonts.
- All pages and components using hooks, state, or browser APIs have `"use client"` at the top.
- The `ClientLayout` component bridges server layout and client providers.

### State Management
- **Cart state**: React Context + `useReducer` in `context/CartContext.tsx`. Do not introduce Redux or Zustand — the cart is the only app-level state.
- **Local form state**: `useState` in `checkout/page.tsx` for form fields.

### Data Layer
- Products and portfolio items are **hardcoded in `/lib`**. There is no database or CMS.
- To add products: edit `lib/products.ts`. To add portfolio projects: edit `lib/portfolio.ts`.

### Styling System
- **Tailwind CSS v4** via PostCSS. No `tailwind.config.*` file is needed with v4.
- **Custom CSS variables** defined in `globals.css` `:root`:
  - `--neon`: `#39FF14` (neon green — the primary accent)
  - `--black`: `#0a0a0a`
  - `--white`: `#f0f0f0`
  - `--silver`: `#c0c0c0`
- **Centralized class strings** in `src/lib/uiClasses.ts`. Use these constants for buttons, cards, inputs, badges, and gradient borders. Do not inline duplicate style strings.
- **Animations** are defined as CSS keyframes in `globals.css` (shine sweep, float, bounce, glow, border spin, etc.).

### Payments
- Stripe API via `stripe` npm package.
- API route: `POST /api/create-checkout-session` in `app/api/create-checkout-session/route.ts`.
- Required env var: `STRIPE_SECRET_KEY`.
- Optional env var: `NEXT_PUBLIC_APP_URL` (falls back to the request origin).

---

## Key Conventions

### File Naming
| Type | Convention | Example |
|------|-----------|---------|
| App pages | `app/<route>/page.tsx` | `app/cart/page.tsx` |
| Components | PascalCase | `ClientLayout.tsx` |
| Utilities / data | camelCase | `products.ts`, `uiClasses.ts` |
| API routes | `app/api/<endpoint>/route.ts` | `app/api/create-checkout-session/route.ts` |

### TypeScript
- Strict mode enabled (`tsconfig.json`).
- Path alias `@/*` maps to the repository root (e.g., `@/lib/products`).
- Type definitions for third-party packages are in `devDependencies`.

### Imports
- Use the `@/` alias for all non-relative imports (e.g., `import { products } from "@/lib/products"`).
- `"use client"` must be the **first line** in any client component file.

### Component Patterns
- Wrap new UI interaction components in `/src/components/`.
- Place data helpers and static content in `/lib/`.
- Reusable Tailwind class strings go in `src/lib/uiClasses.ts`, not scattered across components.

---

## CartContext API

Located in `context/CartContext.tsx`. Provides:

| Export | Type | Description |
|--------|------|-------------|
| `CartProvider` | Component | Wrap app to provide cart context |
| `useCart()` | Hook | Access cart state and actions |
| `items` | `CartItem[]` | Current cart items |
| `addToCart(product)` | Function | Add a product to cart |
| `removeFromCart(id)` | Function | Remove item by product ID |
| `clearCart()` | Function | Empty the cart |
| `totalItems` | `number` | Total item count |
| `totalPrice` | `number` | Sum of all item prices |
| `getCartLines()` | Function | Returns Stripe line_items format |

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `STRIPE_SECRET_KEY` | Yes | Stripe secret key (starts with `sk_`) |
| `NEXT_PUBLIC_APP_URL` | No | Base URL for redirect URIs; defaults to request origin |

Create a `.env.local` file at the repo root with these values. Never commit this file.

---

## Image Configuration

External image domains are allowlisted in `next.config.ts`:
- `images.unsplash.com`
- `placehold.co`

To use images from other domains, add them to the `remotePatterns` array in `next.config.ts`.

---

## What Does Not Exist (Do Not Assume)

- No test framework (Jest, Vitest, Playwright, etc.)
- No database or ORM
- No authentication / user accounts
- No CMS or admin panel
- No CI/CD pipelines or GitHub Actions
- No Docker configuration
- No error monitoring (Sentry, etc.)
- No analytics
- No internationalization (i18n)
- No `vercel.json` deployment configuration
- No `.env.example` file (should be created if adding new env vars)

---

## Design System Notes

The UI follows a **neon cyberpunk / glassmorphism** aesthetic:
- Dark backgrounds (`#0a0a0a`)
- Neon green (`#39FF14`) as the primary accent — buttons, glows, borders
- Glassmorphic cards: semi-transparent with `backdrop-filter: blur()`
- Animations: shine sweep on hover, float for cards, bounce for the cart badge
- Animated conic gradient border via CSS `mask-composite` (see `uiClasses.ts`)
- Cursor-tracking effects: `CursorGlow` (background) and `ParallaxHero` (hero tilt)

When adding new UI elements, maintain this aesthetic and reuse class strings from `src/lib/uiClasses.ts`.
