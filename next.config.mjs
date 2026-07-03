/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Panoul de administrare (fișier static din public/admin/)
      { source: "/admin", destination: "/admin/index.html" },
    ];
  },
};

export default nextConfig;
