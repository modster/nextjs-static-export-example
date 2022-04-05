const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/post/1': { page: '/post', query: { title: '1' } },
    }
  },
}

module.exports = nextConfig
