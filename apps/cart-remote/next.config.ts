import type { NextConfig } from "next";

const assetPrefix = process.env.VERCEL_URL;

const nextConfig: NextConfig = {
  assetPrefix: assetPrefix,
  transpilePackages: ["@repo/ui-shared", "@repo/utils"],
};

export default nextConfig;
