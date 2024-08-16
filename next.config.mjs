/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    TEST: process.env.TEST
  }
};

export default nextConfig;
