/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/kushagra_sharma.pdf',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
