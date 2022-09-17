/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enable styledComponents
    styledComponents: true,
  }
}

module.exports = nextConfig
