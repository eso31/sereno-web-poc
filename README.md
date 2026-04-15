# Sereno de Montaña — POC Landing Page

This repository contains a minimal Next.js (App Router) + Tailwind CSS proof-of-concept landing page for the artisanal coffee brand "Sereno de Montaña".

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Notes
- Colors were chosen to match the `img/Precios.jpeg` artwork (warm browns, cream, caramel).
- The page references the images in `/img` (logo and Precios.jpeg) by importing them in components — keep the `img` folder at project root.
- Facebook link is included in the header and contact area. Update the link in `components/Navbar.tsx` and `app/page.tsx` if you have the exact page URL.

Ready for Vercel: this is a simple App Router project; deploy with Vercel as usual.
