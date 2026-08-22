import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/site";

/**
 * Static export config for GitHub Pages.
 *
 * Deployed to the PROJECT repo `github.com/DamianKumar7/portfolio-website`,
 * so the site is served under `/portfolio-website`, not at the domain root.
 * basePath/assetPrefix below make every route and asset URL account for that.
 *
 * If this ever moves to a GitHub *user* site (repo renamed to
 * `DamianKumar7.github.io`, served at the root), remove both lines below.
 */
const nextConfig: NextConfig = {
  output: "export", // emit a fully static site into ./out
  images: {
    unoptimized: true, // GitHub Pages has no Next.js image optimizer
  },
  trailingSlash: true, // emit /about/index.html style paths (safer on static hosts)
  basePath: BASE_PATH,
  assetPrefix: `${BASE_PATH}/`,
};

export default nextConfig;
