/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'youtube-clone.nyc3.digitaloceanspaces.com'],
  },
}

module.exports = nextConfig
