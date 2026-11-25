# Devign Apps

Marketing site for [Devign Apps](https://devignapps.com), a New York web and mobile
app development studio. Built with React 18, Vite and plain CSS, deployed on Vercel.

## Getting started

```bash
nvm use            # Node 20+ (see .nvmrc)
npm install
npm run dev        # http://localhost:3000
```

| Script            | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reloading   |
| `npm run build`   | Production build into `dist/`                  |
| `npm run preview` | Serve the production build locally             |
| `npm run lint`    | ESLint (React hooks + refresh rules)           |
| `npm run format`  | Prettier over `src/` and `index.html`          |

## Project structure

```
index.html              Document shell, fonts, meta tags, JSON-LD
public/                 Static assets served as-is (favicons, robots, sitemap, images)
src/
  main.jsx              React entry point
  App.jsx               Routes (inner pages are lazy-loaded)
  styles/
    tokens.css          Design tokens: brand colours, type scale, spacing, radii, shadows
    base.css            Reset and element defaults
    utilities.css       Layout primitives (.container, .section, .grid, .eyebrow, .reveal)
  config/site.js        Company details, navigation, EmailJS identifiers
  data/                 Page content (services, projects, testimonials, company facts)
  lib/                  Hooks and helpers (page meta, scroll reveal, Cloudinary URLs)
  components/
    layout/             Header, Footer, SiteLayout, ScrollToTop
    ui/                 Button, PageHero, Breadcrumbs, Stars
    sections/           Reusable page sections (cards, process steps, contact form, CTA)
  pages/                One folder per route, each with its own stylesheet
```

### Conventions

- **Content lives in `src/data` and `src/config`**, not in components. To add a project,
  testimonial, role or service, edit the matching data file.
- **Styling is plain CSS with design tokens.** Every colour, radius and spacing value comes
  from `src/styles/tokens.css`; components use BEM-style class names (`.block__element--modifier`)
  and ship their own stylesheet next to the component.
- **Images** are served from Cloudinary through `cld()` (`src/lib/cloudinary.js`), which adds
  `f_auto,q_auto` and a width so browsers never download full-size originals. Below-the-fold
  images use `loading="lazy"`.
- **Accessibility:** semantic landmarks, skip link, keyboard-operable menus, visible focus
  styles, `prefers-reduced-motion` support, and real text for testimonials.
- **SEO:** per-route `<title>`, description, canonical and Open Graph tags via `usePageMeta`,
  plus `robots.txt`, `sitemap.xml` and JSON-LD organisation data.

## Contact form

The form posts through [EmailJS](https://www.emailjs.com). The public identifiers are set in
`src/config/site.js` and can be overridden with environment variables (see `.env.example`).
Field names match the existing EmailJS template.

## Deployment

Vercel builds from `main` automatically. `vercel.json` sets the SPA rewrite, long-term caching
for hashed assets and baseline security headers.
