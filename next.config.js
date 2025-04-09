/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 在生产构建时禁用ESLint检查
    ignoreDuringBuilds: true,
  },
  // 禁用webpack缓存以避免生成大型缓存文件
  webpack: (config, { dev, isServer }) => {
    // 生产环境下的优化
    if (!dev) {
      // 优化分块策略
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 20 * 1024 * 1024, // 20MB
        cacheGroups: {
          default: false,
          vendors: false,
          // 将大型依赖项分开打包
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](@react|react|react-dom|next|scheduler)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.+?)(?:[\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
  // 禁用图像优化以减小构建大小
  images: {
    unoptimized: true,
  },
  // 输出独立构建
  output: 'standalone',
  // 禁用源映射以减小构建大小
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
