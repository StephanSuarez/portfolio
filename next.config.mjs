const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPage = repoName.endsWith(".github.io");
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPages && !isUserPage ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

export default nextConfig;
