import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  distDir: '.next',

  // ✅ Add an empty turbopack config to silence the warning
  turbopack: {},

  // ✅ Remove the entire 'webpack()' function from here

  async headers() {
    return [
      // ... your headers configuration
    ];
  },
  async redirects() {
    return [
      // ... your redirects configuration
    ];
  },
  output: 'standalone',
  experimental: {
    optimizeCss: true,
    serverComponentsExternalPackages: [],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-nine-peach-41.vercel.app/',
  },
};

export default nextConfig;