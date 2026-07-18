import type { NextConfig } from "next";

let assetPrefix = 'http://localhost:3001';
if (process.env.ASSET_URL) {
  assetPrefix = process.env.ASSET_URL.startsWith('http') ? process.env.ASSET_URL : `https://${process.env.ASSET_URL}`;
} else if (process.env.VERCEL_URL) {
  assetPrefix = `https://${process.env.VERCEL_URL}`;
}

const nextConfig: NextConfig = {
  assetPrefix:assetPrefix,
  transpilePackages: ["@repo/ui-shared", "@repo/utils"],
};

export default nextConfig;
