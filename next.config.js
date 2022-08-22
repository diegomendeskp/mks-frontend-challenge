/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;
