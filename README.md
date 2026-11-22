# Chetan — Portfolio

Personal portfolio of Chetan, software engineer (B.Tech CSE, IIIT Agartala, 2027).

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS. No UI or animation libraries: motion is CSS plus a small
`IntersectionObserver` hook, and icons are inline SVG.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Editing content

All copy (projects, skills, links, education) lives in [`src/data/profile.ts`](src/data/profile.ts).
The résumé served by the download buttons is `public/Chetan-Resume.pdf`; replace that file to update it.

## Structure

```
src/
  data/profile.ts       content (single source of truth)
  components/           Nav, Section, Reveal, Button, Icons
  hooks/                useTheme, useReveal, useActiveSection
  sections/             Hero, Projects (+ diagrams), OpenSource, Skills, About, Contact, Footer
```

## Deploy

Vercel or Cloudflare Pages: build command `npm run build`, output directory `dist`.
If the production URL changes, update the canonical/OG URLs in `index.html`, `public/robots.txt` and `public/sitemap.xml`.
