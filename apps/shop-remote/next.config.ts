import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: 'http://localhost:3001',
  transpilePackages: ["@repo/ui-shared", "@repo/utils"],
};

export default nextConfig;
