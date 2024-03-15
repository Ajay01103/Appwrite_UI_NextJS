/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["appwrite.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
