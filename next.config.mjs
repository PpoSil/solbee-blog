const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["jsx", "mdx"],
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
