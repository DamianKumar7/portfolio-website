import type { NextConfig } from "next";

/**
 * Static export config for GitHub Pages.
 *
 * This site is built to be served at the ROOT of a GitHub *user* site
 * (repo named `<username>.github.io`, e.g. `DamianKumar7.github.io`),
 * so no basePath/assetPrefix is needed.
 *
 * If you instead deploy to a PROJECT repo (e.g. `github.com/DamianKumar7/portfolio`),
 * the site is served under `/<repo>`. In that case, uncomment and set:
 *   basePath: "/portfolio",
 *   assetPrefix: "/portfolio/",
 */
const nextConfig: NextConfig = {
  output: "export", // emit a fully static site into ./out
  images: {
    unoptimized: true, // GitHub Pages has no Next.js image optimizer
  },
  trailingSlash: true, // emit /about/index.html style paths (safer on static hosts)
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
};

export default nextConfig;
