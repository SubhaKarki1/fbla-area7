/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimization is available on Vercel; leaving it off served multi-megabyte
  // originals into small thumbnails.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
