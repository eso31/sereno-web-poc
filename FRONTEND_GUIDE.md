# 📚 Frontend Guide — Sereno de Montaña

A study guide covering the key frontend concepts used in this project, with real examples taken directly from the codebase.

---

## 1. 🧱 Tech Stack Overview

| Technology | Role | Version |
|---|---|---|
| **Next.js** | React framework (routing, SSR, image optimization) | 14 |
| **React** | UI library (components, state, effects) | 18 |
| **TypeScript** | Typed JavaScript superset | 5 |
| **Tailwind CSS** | Utility-first CSS framework | 3 |
| **PostCSS** | CSS transformation tool (used by Tailwind) | — |

---

## 2. ⚛️ React Fundamentals

### 2.1 `useState` — Managing component state

`useState` lets a component remember a value between renders. When the value changes, the component re-renders.

```tsx
// PriceTable.tsx — toggle between Local / Foráneo prices
const [location, setLocation] = useState<'local' | 'foraneo'>('local')

// Updating state on button click
<button onClick={() => setLocation('foraneo')}>Foráneo</button>
```

**Pattern:** The first item in the array is the current value, the second is a function to update it.

```tsx
const [open, setOpen] = useState(false)          // boolean
const [current, setCurrent] = useState(0)         // number
const [status, setStatus] = useState<'idle'|'loading'|'ok'|'error'>('idle')  // union type
```

---

### 2.2 `useEffect` — Side effects

`useEffect` runs code **after the component renders**. It's used for things that need access to the browser (DOM, timers, APIs).

```tsx
// BackToTop.tsx — listen to scroll position
useEffect(() => {
  const onScroll = () => setVisible(window.scrollY > 400)
  window.addEventListener('scroll', onScroll, { passive: true })

  // Cleanup: remove listener when component unmounts
  return () => window.removeEventListener('scroll', onScroll)
}, []) // empty array = run once on mount
```

```tsx
// HeroSlideshow.tsx — auto-advance every 5 seconds
useEffect(() => {
  const id = setInterval(() => {
    setCurrent(prev => (prev + 1) % SLIDES.length)
  }, 5000)

  return () => clearInterval(id) // cleanup on unmount
}, [])
```

**The dependency array `[]`:**
- `[]` — run once after first render
- `[someValue]` — run whenever `someValue` changes
- *(no array)* — run after every render

---

### 2.3 `useRef` — Direct DOM access

`useRef` gives you a stable reference to a DOM element without causing re-renders.

```tsx
// ScrollReveal.tsx
const ref = useRef<HTMLDivElement>(null)

useEffect(() => {
  const el = ref.current  // the actual <div> DOM node
  if (!el) return
  // ... observe el
}, [])

return <div ref={ref}>...</div>
```

---

### 2.4 `'use client'` — Client vs Server Components

Next.js 14 (App Router) renders components on the **server by default** for performance. To use browser APIs or React hooks, you must opt into client-side rendering:

```tsx
'use client'  // must be the very first line

import { useState } from 'react'
```

**When to use `'use client'`:**
- Using `useState`, `useEffect`, `useRef`
- Handling events (`onClick`, `onSubmit`)
- Accessing browser APIs (`window`, `document`, `IntersectionObserver`)

**Without `'use client'`** (server component — default):
- Can `async/await` data fetching directly
- Cannot use hooks or browser APIs
- `app/page.tsx` is a server component because it only renders static JSX

---

### 2.5 Props and Children

```tsx
// ScrollReveal.tsx accepts children and an optional className
export default function ScrollReveal({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`reveal ${className}`}>{children}</div>
}

// Usage in page.tsx
<ScrollReveal>
  <section id="nosotros">...</section>
</ScrollReveal>
```

---

### 2.6 Conditional rendering

```tsx
// BackToTop.tsx — only render button when scrolled down
if (!visible) return null

// PriceTable.tsx — apply different styles based on active tab
className={location === 'local' ? 'text-white' : 'text-brand-dark/70'}
style={location === 'local' ? { background: 'var(--brand-caramel)' } : {}}
```

---

### 2.7 Mapping over data arrays

```tsx
// HeroSlideshow.tsx — render one Image per slide
const SLIDES = ['/img/bg-1.png', '/img/bg-2.png', ...]

{SLIDES.map((src, i) => (
  <Image key={src} src={src} ... />
))}
```

> ⚠️ Always include a unique `key` prop when mapping — React uses it to track list items.

---

## 3. 🗂️ Next.js App Router

### 3.1 File-based routing

The `app/` folder defines routes automatically:

```
app/
  page.tsx        → renders at "/"  (home page)
  layout.tsx      → shared wrapper for all pages
  api/
    contact/
      route.ts    → API endpoint at "/api/contact"
```

---

### 3.2 `layout.tsx` — Shared shell

Every page is wrapped in this layout. It's where you put the Navbar, Footer, and global metadata.

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>  {/* page.tsx renders here */}
        <Footer />
      </body>
    </html>
  )
}
```

---

### 3.3 `metadata` export — SEO & favicon

```tsx
export const metadata = {
  title: 'Sereno de Montaña — Café Artesanal',
  description: 'Café artesanal cultivado en Oaxaca...',
  icons: {
    icon: '/img/logo/Logo IG.png',
  },
}
```

This automatically generates the correct `<title>` and `<link rel="icon">` tags in the HTML `<head>`.

---

### 3.4 `next/image` — Optimized images

```tsx
import Image from 'next/image'

// Fixed size
<Image src="/img/taza-y-bolsa.png" alt="Café" width={600} height={600} />

// Fill parent container (requires parent to have position: relative)
<div className="relative h-96">
  <Image src="/img/hero.png" alt="Hero" fill className="object-cover" />
</div>
```

**Key props:**
- `fill` — image fills its parent container
- `priority` — preloads the image (use for above-the-fold images)
- `className="object-cover"` — same as CSS `object-fit: cover`
- `style={{ objectPosition: '50% 45%' }}` — same as CSS `object-position`

---

### 3.5 `next/link` — Client-side navigation

```tsx
import Link from 'next/link'

<Link href="#nosotros">Nosotros</Link>  // anchor link
<Link href="/otra-pagina">Otra</Link>   // page navigation
```

Prevents full page reload — faster than a plain `<a>` tag for internal links.

---

### 3.6 API Routes

```ts
// app/api/contact/route.ts
export async function POST(req: Request) {
  const body = await req.json()
  // handle form submission...
  return new Response(JSON.stringify({ ok: true }), { status: 200 })
}
```

Calling it from the frontend:

```tsx
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

---

## 4. 🎨 Tailwind CSS

Tailwind is a **utility-first** CSS framework — instead of writing custom CSS, you compose classes directly in HTML/JSX.

### 4.1 Basic utilities

```html
<!-- Spacing -->
<div class="p-4 mt-8 mb-2 px-6 py-3">

<!-- Sizing -->
<div class="w-full h-96 max-w-3xl">

<!-- Text -->
<p class="text-sm font-semibold text-center uppercase tracking-wide">

<!-- Colors -->
<div class="bg-white text-gray-800 border border-gray-200">

<!-- Border radius & shadow -->
<div class="rounded-lg shadow-md">
```

---

### 4.2 Responsive prefixes

Tailwind is **mobile-first**. Add a breakpoint prefix to apply a style only at that size and above:

```html
<div class="h-56 md:h-96 lg:h-[420px]">
<!-- 
  mobile:  h-56  (224px)
  ≥768px:  h-96  (384px)
  ≥1024px: h-[420px] (arbitrary value)
-->

<div class="grid sm:grid-cols-3 gap-6">
<!-- Single column on mobile, 3 columns ≥640px -->
```

| Prefix | Min width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

---

### 4.3 State variants

```html
<button class="bg-blue-500 hover:bg-blue-600 active:opacity-90 disabled:opacity-50">
<a class="text-gray-700 hover:text-orange-600 transition-colors">
```

---

### 4.4 Arbitrary values

Use `[value]` syntax for one-off values not in the scale:

```html
<div class="h-[420px] bg-[#FAF7F2] text-[0.8rem]">
```

---

### 4.5 `@apply` — Reusable component classes

In `globals.css`, you can bundle Tailwind utilities into a custom class:

```css
/* globals.css */
.soft-card {
  @apply rounded-lg shadow-lg p-6 border transition-shadow;
  background-color: #FAF7F2;
}

.accent-btn {
  @apply inline-block text-white font-medium rounded-md px-3 py-1.5;
  background: linear-gradient(180deg, var(--brand-caramel), #6f4823);
}
```

Then use it like any other class:

```tsx
<div className="soft-card">...</div>
<button className="accent-btn">Enviar</button>
```

---

### 4.6 CSS custom properties in Tailwind

Defined in `:root` in `globals.css`, then usable via `var()`:

```css
:root {
  --brand-caramel: #96622F;
  --brand-dark: #1E1510;
}
```

```tsx
// Using in inline styles
style={{ background: 'var(--brand-caramel)' }}

// Using in Tailwind (configured in tailwind.config.js)
<p className="text-brand-caramel">
```

---

## 5. 🌐 Browser APIs

### 5.1 `IntersectionObserver` — Detect element visibility

Used in both `ScrollReveal.tsx` and `NavScrollSpy.tsx`.

```tsx
const observer = new IntersectionObserver(
  ([entry]) => {          // called whenever visibility changes
    if (entry.isIntersecting) {
      // element entered the viewport
      el.classList.add('visible')
      observer.disconnect()  // stop observing once triggered
    }
  },
  { threshold: 0.1 }  // trigger when 10% of element is visible
)

observer.observe(el)            // start watching the element
// ...
observer.disconnect()           // cleanup
```

---

### 5.2 `setInterval` / `clearInterval` — Repeating timers

```tsx
// HeroSlideshow.tsx
const id = setInterval(() => {
  setCurrent(prev => (prev + 1) % SLIDES.length)
}, 5000)  // run every 5000ms (5 seconds)

// Must clear it when component unmounts to prevent memory leaks
return () => clearInterval(id)
```

---

### 5.3 Scroll events

```tsx
// BackToTop.tsx
const onScroll = () => setVisible(window.scrollY > 400)
window.addEventListener('scroll', onScroll, { passive: true })
```

- `window.scrollY` — how many pixels from the top the page is scrolled
- `{ passive: true }` — performance hint: tells browser this won't call `preventDefault()`

---

### 5.4 Smooth scroll

```tsx
// BackToTop.tsx
window.scrollTo({ top: 0, behavior: 'smooth' })

// globals.css — makes all anchor links smooth
html { scroll-behavior: smooth; }
```

---

## 6. 🧩 Component Patterns

### 6.1 Render-nothing component

`NavScrollSpy.tsx` renders no JSX — it only attaches side effects:

```tsx
export default function NavScrollSpy() {
  useEffect(() => {
    // attach IntersectionObserver ...
  }, [])

  return null  // no UI, just behaviour
}
```

---

### 6.2 Conditional show/hide

```tsx
// BackToTop.tsx
if (!visible) return null  // component renders nothing until scrolled

// vs toggling visibility with CSS
<div className={visible ? 'opacity-100' : 'opacity-0'}>
// (still in DOM, just invisible)
```

---

### 6.3 Derived state — don't duplicate

```tsx
// PriceTable.tsx — derive rows from state instead of storing them separately
const [location, setLocation] = useState<Location>('local')
const rows = PRICES[location]  // computed from state, not stored in state
```

---

## 7. 📐 CSS Concepts

### 7.1 CSS custom properties (variables)

```css
:root {
  --brand-caramel: #96622F;
}

.some-element {
  background: var(--brand-caramel);
}
```

Variables defined in `:root` are available globally.

---

### 7.2 Positioning

```css
/* Hero slideshow stacking */
.hero-wrapper {
  position: relative;  /* establishes stacking context */
}
.hero-image {
  position: absolute;  /* removed from normal flow, fills parent */
  inset: 0;            /* shorthand for top/right/bottom/left: 0 */
}
.hero-caption {
  position: absolute;
  z-index: 10;         /* renders on top of images */
}

/* Navbar stays at top while scrolling */
nav {
  position: sticky;
  top: 0;
}

/* Back to Top button always visible in corner */
.back-to-top {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
}
```

---

### 7.3 CSS transitions & opacity for animations

```css
/* ScrollReveal — elements fade + slide in */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Image crossfade in slideshow */
img {
  transition: opacity 1000ms;
  opacity: 0;  /* hidden */
}
img.active {
  opacity: 1;  /* visible */
}
```

---

### 7.4 `backdrop-filter`

```css
/* Navbar blur effect */
nav {
  backdrop-filter: blur(12px);       /* blurs content behind */
  background: rgba(230,217,201,0.9); /* semi-transparent */
}
```

---

### 7.5 CSS gradients

```css
/* Page background */
body {
  background: linear-gradient(180deg, #EDE2D0 0%, #DDD0BA 100%);
  /*          direction   start-color      end-color */
}

/* Button gradient */
.accent-btn {
  background: linear-gradient(180deg, #96622F, #6f4823);
}
```

---

## 8. 🔤 TypeScript Basics

### 8.1 Type aliases

```ts
type Location = 'local' | 'foraneo'  // union type — only these two strings allowed

let loc: Location = 'local'   // ✅ valid
let loc: Location = 'ciudad'  // ❌ TypeScript error
```

---

### 8.2 `Record<K, V>` — typed object/dictionary

```ts
const PRICES: Record<Location, Row[]> = {
  local:   [...],
  foraneo: [...],
}
// Record<'local'|'foraneo', Row[]>
// = { local: Row[], foraneo: Row[] }
```

---

### 8.3 Generic `useState`

```ts
const [status, setStatus] = useState<'idle'|'loading'|'ok'|'error'>('idle')
// TypeScript now knows status can only be one of those 4 strings
```

---

### 8.4 DOM types

```ts
const ref = useRef<HTMLDivElement>(null)
// ref.current is typed as HTMLDivElement | null

const links = document.querySelectorAll<HTMLAnchorElement>('nav a')
// each element in links is typed as HTMLAnchorElement
// so link.getAttribute(...) is known to exist
```

---

### 8.5 Event types

```tsx
// ContactForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()  // TypeScript knows this method exists
  // ...
}

<form onSubmit={handleSubmit}>
```

---

### 8.6 Optional props with `?`

```ts
function ScrollReveal({
  children,
  className = ''          // default value if not provided
}: {
  children: React.ReactNode
  className?: string      // ? = optional prop
}) { ... }
```

---

## 9. 📁 Project File Structure Reference

```
sereno-web-poc-main/
├── app/
│   ├── globals.css          ← Global styles, CSS variables, Tailwind base
│   ├── layout.tsx           ← Root layout: Navbar, Footer, metadata
│   └── page.tsx             ← Home page content
│   └── api/
│       └── contact/
│           └── route.ts     ← POST endpoint for contact form
├── components/
│   ├── Navbar.tsx           ← Sticky nav with hamburger menu
│   ├── Footer.tsx           ← Footer with links and social icons
│   ├── ContactForm.tsx      ← Controlled form with fetch
│   ├── PriceTable.tsx       ← Price table with Local/Foráneo toggle
│   ├── HeroSlideshow.tsx    ← Auto-cycling background images
│   ├── ScrollReveal.tsx     ← Fade-in-on-scroll wrapper
│   ├── BackToTop.tsx        ← Floating scroll-to-top button
│   └── NavScrollSpy.tsx     ← Active nav link on scroll
├── public/
│   └── img/                 ← Static images served as-is
├── tailwind.config.js       ← Tailwind theme customization
└── next.config.js           ← Next.js configuration
```

---

## 10. 🔗 Recommended Resources

| Topic | Resource |
|---|---|
| React docs (official) | https://react.dev |
| Next.js docs | https://nextjs.org/docs |
| Tailwind CSS docs | https://tailwindcss.com/docs |
| TypeScript handbook | https://www.typescriptlang.org/docs |
| IntersectionObserver | https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API |
| CSS Tricks — Flexbox | https://css-tricks.com/snippets/css/a-guide-to-flexbox |
| CSS Tricks — Grid | https://css-tricks.com/snippets/css/complete-guide-grid |
