const nextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/my-portfolio", // Replace <repo-name> with your repo (e.g., "my-portfolio")
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "/my-portfolio/",
  images: {
    unoptimized: true, // 👈 disable image optimization for static export
  },
  // basePath: "/portfolio", // 👈 if your repo is named 'portfolio'
};

module.exports = nextConfig;