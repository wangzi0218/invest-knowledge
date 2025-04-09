/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 在生产构建时禁用ESLint检查
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
  // 设置基本路径
  basePath: '',
  // 禁用严格模式以避免一些兼容性问题
  reactStrictMode: false,
}

module.exports = nextConfig
