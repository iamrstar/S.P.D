/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ This enables static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export if you're using <Image />
  },
};

export default nextConfig;
