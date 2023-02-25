/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.talkchelsea.net',
      },
    ],
    formats: ["image/webp"]
  },
}

module.exports = nextConfig
