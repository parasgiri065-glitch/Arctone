/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopack: false, // Disabled due to hanging issues with large JSX files
  },
  // Prevent common configuration errors
  reactStrictMode: true,
  // Optimize for stability
  swcMinify: true,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Code splitting and lazy loading
  webpack: (config, { isServer }) => {
    config.optimization.splitChunks.cacheGroups = {
      ...config.optimization.splitChunks.cacheGroups,
      framerMotion: {
        test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
        name: 'framer-motion',
        priority: 10,
      },
    };
    return config;
  },
  
  // Security headers & performance headers
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
        {
          key: 'X-UA-Compatible',
          value: 'IE=edge',
        },
      ],
    },
    {
      source: '/api/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=60, s-maxage=120',
        },
      ],
    },
  ],
  
  // Redirect malformed requests
  redirects: async () => [],
  
  // Response compression
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
}

export default nextConfig
