import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: 'http://localhost:3002',
  transpilePackages: ["@repo/ui-shared", "@repo/utils"],
};

export default nextConfig; 
