/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio', // your GitHub repo name
  images: {
    unoptimized: true, // required for static export
  },
  assetPrefix: '/my-portfolio/', // also based on repo name
};

module.exports = nextConfig;
