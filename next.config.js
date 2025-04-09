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
  // 使用静态导出模式，输出到out目录，与 Cloudflare Pages 预设匹配
  output: 'export',
  // 禁用类型检查以加速构建
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用严格模式以避免一些兼容性问题
  reactStrictMode: false,
  // 简化配置，移除不必要的高级设置
  // 这些设置可能会导致与 Cloudflare Pages 预设不兼容
}

module.exports = nextConfig
