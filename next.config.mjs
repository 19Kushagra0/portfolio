/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/kushagra_sharma.pdf',
      },
    ];
  },
};

export default nextConfig;
