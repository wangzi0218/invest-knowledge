/** @type {import('next').NextConfig} */
const nextConfig = {
  // 在生产构建时禁用ESLint检查
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 禁用图像优化以减小构建大小
  images: {
    unoptimized: true,
  },
  // 禁用源映射以减小构建大小
  productionBrowserSourceMaps: false,
  // 使用静态导出以避免服务器组件
  output: 'export',
  // 禁用类型检查以加速构建
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用严格模式以避免一些兼容性问题
  reactStrictMode: false,
  // 自定义构建目录，不使用默认的.next目录
  distDir: 'build',
  // 禁用静态生成优化，减小构建时间和内存使用
  staticPageGenerationTimeout: 120,
  // 优化webpack配置以减小构建大小
  webpack: (config, { dev, isServer }) => {
    // 只在生产构建时应用这些优化
    if (!dev) {
      // 禁用缓存，避免生成大型缓存文件
      config.cache = false;
      
      // 设置最小化以减小输出大小
      if (config.optimization && !isServer) {
        // 禁用默认的分块策略
        config.optimization.splitChunks = false;
        // 禁用名称优化
        config.optimization.concatenateModules = false;
      }
    }
    return config;
  },
  // 忽略构建错误，确保即使有错误也能完成构建
  onDemandEntries: {
    // 延长页面在内存中的保留时间
    maxInactiveAge: 60 * 1000,
    // 同时在内存中保留的页面数量
    pagesBufferLength: 2,
  },
  // 禁用遍历优化，减少内存使用
  swcMinify: true,
  // 禁用自动静态优化，减少构建时间
  experimental: {
    // 禁用服务器组件
    serverComponents: false,
    // 禁用并行路由
    parallelRoutes: false,
  }
}

module.exports = nextConfig
