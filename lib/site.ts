/**
 * Single source of truth for the GitHub Pages project-repo base path.
 * next.config.ts imports this for basePath/assetPrefix; components import it
 * for any raw <a href="/..."> that points at a /public asset, since Next.js
 * only auto-prefixes next/link and next/image, not plain anchor tags.
 */
export const BASE_PATH = "/portfolio-website"
export const RESUME_URL = `${BASE_PATH}/resume.pdf`
