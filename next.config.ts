const nextConfig = {
  output: 'export', // 👈 required for GitHub Pages
  images: {
    unoptimized: true, // 👈 disable image optimization for static export
  },
  basePath: "/portfolio", // 👈 if your repo is named 'portfolio'
};

module.exports = nextConfig;