const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src', 'server']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
  },
  poweredByHeader: false
}
module.exports = nextConfig
