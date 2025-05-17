/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sonastudio.in',
      },
    ],
  },
};

export default nextConfig;
