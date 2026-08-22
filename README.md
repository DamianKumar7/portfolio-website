# Mainak Kumar — Portfolio

Personal portfolio site built with **Next.js 15**, **React 19**, **Tailwind CSS**, and
**shadcn/ui**, deployed as a fully static export to **GitHub Pages**.

Sections: Hero · About · Experience · Projects · Skills · GitHub activity · Contact.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs a static site into ./out
```

`next.config.ts` sets `output: "export"`, so `npm run build` produces a plain static
site in `out/` — no Node server needed at runtime.

## Deploying to GitHub Pages

This is configured for a **user site served at the root** (no `basePath`).

1. Create/rename the GitHub repo to **`DamianKumar7.github.io`** and push this code.
2. In the repo: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
3. Push to `main`/`master`. The workflow in
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes.
4. Site goes live at **https://damiankumar7.github.io**.

> **Deploying to a project repo instead** (e.g. `github.com/DamianKumar7/portfolio`)?
> The site is then served under `/<repo>`. Uncomment `basePath` and `assetPrefix` in
> `next.config.ts` and set them to `/<repo>`.

## Updating content

All content lives in plain data arrays inside the section components — no CMS:

| What | File |
|------|------|
| Name, headline, taglines, social links | `components/Hero.tsx`, `components/Header.tsx` |
| Bio + highlight stats | `components/About.tsx` |
| Work history | `components/Experience.tsx` |
| Projects | `components/Projects.tsx` |
| Skills | `components/Skills.tsx` |
| Contact links | `components/Contact.tsx` |
| Résumé PDF | `public/resume.pdf` |
| GitHub username (contribution graph) | `components/GitHubActivity.tsx` |
