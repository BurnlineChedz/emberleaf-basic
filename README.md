# Emberleaf Basic

A single-product e-commerce storefront and portfolio showcase built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion, and Stripe. Styled with a neon cyberpunk / glassmorphism aesthetic.

## Features

- Product catalog with add-to-cart
- Shopping cart with item management
- Stripe-powered checkout
- Post-purchase confirmation with order summary
- Portfolio showcase page
- Cursor-tracking parallax and glow effects

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Framer Motion |
| Styling | Tailwind CSS 4 |
| Payments | Stripe |
| Language | TypeScript 5 (strict) |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and set your Stripe secret key:

```
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Get your Stripe keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev     # Start dev server with hot reload
npm run build   # Production build
npm start       # Run production server
npm run lint    # Run ESLint
```

## Project Structure

```
app/            # Next.js App Router pages and API routes
components/     # Root-level client components (Nav, ClientLayout)
context/        # React Context for cart state
lib/            # Hardcoded product and portfolio data
src/components/ # UI effect components (ParallaxHero, CursorGlow)
src/lib/        # Shared Tailwind class constants
public/         # Static assets
```

See [CLAUDE.md](./CLAUDE.md) for full architecture documentation.

## Customization

- **Products**: Edit `lib/products.ts` to add or modify products.
- **Portfolio**: Edit `lib/portfolio.ts` to add or modify portfolio projects.
- **Theme**: CSS variables (`--neon`, `--black`, `--white`, `--silver`) are defined in `app/globals.css`.
- **External images**: Add new domains to `remotePatterns` in `next.config.ts`.

## Deployment

### Vercel (recommended)

1. Push to GitHub and import the repo in the [Vercel Dashboard](https://vercel.com/new).
2. Add the environment variables from `.env.example` in the Vercel project settings.
3. Deploy.

A `vercel.json` is included with sensible defaults.

### Other platforms

Run `npm run build` and serve the `.next/` output with `npm start`. Ensure environment variables are set in your hosting environment.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `STRIPE_SECRET_KEY` | Yes | Stripe secret key (`sk_test_…` or `sk_live_…`) |
| `NEXT_PUBLIC_APP_URL` | No | Base URL for Stripe redirect URIs; defaults to request origin |
