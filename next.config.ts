import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ React Strict Mode for better development
  reactStrictMode: true,

  // ✅ Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ✅ Compress responses with gzip
  compress: true,

  // ✅ Disable X-Powered-By header for security
  poweredByHeader: false,

  // ❌ REMOVED: swcMinify (enabled by default in Next.js 16)

  // ✅ Build configuration
  distDir: '.next',

  // ✅ Add empty turbopack config for Next.js 16
  turbopack: {},

  // ✅ Headers for security and SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // ✅ Redirects configuration
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // ❌ REMOVED: webpack config (not needed in Next.js 16)

  // ✅ Experimental features
  experimental: {
    // Optimize for faster builds
    optimizeCss: true,
    
    // Enable server components
    serverComponentsExternalPackages: [],
  },

  // ✅ Environment variables (Optional - for build time)
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-nine-peach-41.vercel.app/',
  },

  // ✅ Output configuration - Optimized for Vercel
  output: 'standalone',
};

export default nextConfig;