import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/shop',
        destination: `${process.env.SHOP_URL}/shop`,
      },
      {
        source: '/shop/:path*',
        destination: `${process.env.SHOP_URL}/shop/:path*`,
      },
      {
        source: '/product/:path*',
        destination: `${process.env.ACCOUNT_URL}/product/:path*`,
      },
      {
        source: "/cart",
        destination: `${process.env.CART_URL}/cart`
      },
      {
        source: '/cart/:path*',
        destination: `${process.env.CART_URL}/cart/:path*`,
      }
    ];
  },
  transpilePackages: ["@repo/ui-shared"],
};

export default nextConfig;
