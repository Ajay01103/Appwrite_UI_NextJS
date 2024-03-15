/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "appwrite.io",
        port: 3000,
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig

