# Sketchy Paper UI Style Guidelines (Next.js)

> **CRITICAL**: PaperCSS is the PRIMARY framework for ALL UI components. TailwindCSS is ONLY for layout/spacing.

## Setup

```bash
npx create-next-app@latest my-app --typescript --tailwind --app --src-dir
cd my-app && npm install papercss react-rough-notation
```

**`src/app/globals.css`**:
```css
@tailwind base;
@tailwind utilities;
/* DO NOT use @tailwind components */
@import 'papercss/dist/paper.min.css';

/* Custom Color Palette */
:root {
  --color-lavender: #EAE4E9;
  --color-peach: #FFF1E6;
  --color-rose: #FDE2E4;
  --color-pink: #FAD2E1;
  --color-mint: #E2ECE9;
  --color-sky: #BEE1E6;
  --color-cream: #F0EFEB;
  --color-periwinkle: #DFE7FD;
  --color-blue: #CDDAFD;
}
```

**`tailwind.config.ts`**:
```typescript
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        lavender: '#EAE4E9',
        peach: '#FFF1E6',
        rose: '#FDE2E4',
        pink: '#FAD2E1',
        mint: '#E2ECE9',
        sky: '#BEE1E6',
        cream: '#F0EFEB',
        periwinkle: '#DFE7FD',
        blue: '#CDDAFD',
      },
    },
  },
  corePlugins: {
    preflight: false,
    borderRadius: false, boxShadow: false,
    fontSize: false, fontWeight: false, fontFamily: false,
  },
}
export default config
```

---

## 🎨 Color Palette (USE THESE COLORS)

| Name | Hex | CSS Variable | Tailwind | Use Case |
|------|-----|--------------|----------|----------|
| Lavender | `#EAE4E9` | `var(--color-lavender)` | `bg-lavender` | Backgrounds, cards |
| Peach | `#FFF1E6` | `var(--color-peach)` | `bg-peach` | Warm accents, highlights |
| Rose | `#FDE2E4` | `var(--color-rose)` | `bg-rose` | Alerts, warnings |
| Pink | `#FAD2E1` | `var(--color-pink)` | `bg-pink` | Accent elements |
| Mint | `#E2ECE9` | `var(--color-mint)` | `bg-mint` | Success states |
| Sky | `#BEE1E6` | `var(--color-sky)` | `bg-sky` | Info, links |
| Cream | `#F0EFEB` | `var(--color-cream)` | `bg-cream` | Page backgrounds |
| Periwinkle | `#DFE7FD` | `var(--color-periwinkle)` | `bg-periwinkle` | Hover states |
| Blue | `#CDDAFD` | `var(--color-blue)` | `bg-blue` | Primary actions |

### Color Usage Examples
```tsx
// CSS variable usage
<div style={{ backgroundColor: 'var(--color-cream)' }}>Cream background</div>

// Tailwind custom colors (ONLY for backgrounds)
<div className="bg-lavender">Lavender card</div>
<div className="bg-mint">Success section</div>
<div className="bg-peach">Warm highlight</div>

// Inline for borders
<div className="border" style={{ borderColor: 'var(--color-sky)' }}>Sky border</div>
```

---

## Framework Hierarchy

| Priority | Framework | Purpose |
|----------|-----------|---------|
| 1 | **PaperCSS** | ALL UI components, typography, borders |
| 2 | **Custom Colors** | Palette above for backgrounds/accents |
| 3 | **react-rough-notation** | Hand-drawn annotations |
| 4 | **TailwindCSS** | ONLY spacing, flex, grid, responsive |

---

## PaperCSS Components

### Buttons
```tsx
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-success">Success</button>
<button className="btn-warning">Warning</button>
<button className="btn-danger">Danger</button>
```

### Cards (with custom colors)
```tsx
<div className="card bg-lavender">
  <div className="card-header">Title</div>
  <div className="card-body"><p>Content</p></div>
</div>
<div className="card bg-peach">Warm card</div>
<div className="card bg-mint">Success card</div>
```

### Forms
```tsx
<div className="form-group">
  <label htmlFor="name">Name</label>
  <input type="text" id="name" placeholder="Enter name" />
</div>
<div className="form-group">
  <textarea id="msg" placeholder="Message" />
</div>
<label className="paper-check"><input type="checkbox" /><span>Agree</span></label>
<button className="btn-primary">Submit</button>
```

### Navigation
```tsx
<nav className="border split-nav bg-cream">
  <div className="nav-brand"><h3><Link href="/">Brand</Link></h3></div>
  <div className="nav-links">
    <ul className="inline"><li><Link href="/">Home</Link></li></ul>
  </div>
</nav>
```

### Alerts & Badges
```tsx
<div className="alert bg-mint">Success message</div>
<div className="alert bg-rose">Warning message</div>
<div className="alert bg-sky">Info message</div>
<span className="badge">Default</span>
```

### Tables & Borders
```tsx
<table className="table-striped table-hover"><thead>...</thead></table>
<div className="border">Sketchy border</div>
<div className="paper container bg-cream">Container</div>
```

---

## Rough Notation

```tsx
'use client'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

// Use palette colors for annotations
<RoughNotationGroup show>
  <RoughNotation type="underline" color="#FAD2E1">Pink underline</RoughNotation>
  <RoughNotation type="highlight" color="#FFF1E6">Peach highlight</RoughNotation>
  <RoughNotation type="circle" color="#BEE1E6">Sky circle</RoughNotation>
  <RoughNotation type="box" color="#CDDAFD">Blue box</RoughNotation>
</RoughNotationGroup>
```

---

## Tailwind: Allowed vs Forbidden

### ✅ ALLOWED
- **Custom bg colors**: `bg-lavender`, `bg-peach`, `bg-rose`, `bg-pink`, `bg-mint`, `bg-sky`, `bg-cream`, `bg-periwinkle`, `bg-blue`
- **Spacing**: `p-*`, `m-*`, `gap-*`
- **Layout**: `flex`, `grid`, `grid-cols-*`, `justify-*`, `items-*`
- **Sizing**: `w-*`, `h-*`
- **Responsive**: `sm:*`, `md:*`, `lg:*`

### ❌ FORBIDDEN
- Default Tailwind colors: `bg-red-500`, `text-blue-600`, etc.
- Typography: `font-*`, `text-*` sizes
- Borders: `rounded-*`, `border-*` widths
- Shadows: `shadow-*`

---

## Quick Reference

| Element | ✅ DO | ❌ DON'T |
|---------|-------|----------|
| Button | `btn-primary` | `bg-blue-500 rounded` |
| Card | `card bg-lavender` | `bg-white shadow-lg` |
| Background | `bg-cream`, `bg-mint` | `bg-gray-100` |
| Border | `border` | `rounded-lg` |
| Alert | `alert bg-rose` | `bg-red-100` |

---

## Example Page

```tsx
'use client'
import { RoughNotation } from 'react-rough-notation'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="border split-nav bg-lavender">
        <div className="nav-brand"><h3><Link href="/">📝 App</Link></h3></div>
        <div className="nav-links">
          <ul className="inline"><li><Link href="/">Home</Link></li></ul>
        </div>
      </nav>

      <main className="paper container my-8">
        <h1><RoughNotation type="underline" show color="#FAD2E1">Welcome!</RoughNotation></h1>
        <div className="alert bg-mint">Using the palette correctly!</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="card bg-peach"><div className="card-body">Peach card</div></div>
          <div className="card bg-sky"><div className="card-body">Sky card</div></div>
          <div className="card bg-periwinkle"><div className="card-body">Periwinkle card</div></div>
        </div>
      </main>

      <footer className="border p-4 text-center bg-lavender">Made with 💖</footer>
    </div>
  )
}
```

---

## Resources
- [PaperCSS Docs](https://www.getpapercss.com/) | [react-rough-notation](https://github.com/linkstrifer/react-rough-notation)
