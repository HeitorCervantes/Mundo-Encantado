/** @type {import('next').NextConfig} */
const nextConfig = {
  // OPCIONAL: permite incorporar sua página dentro do Canva.com.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://*.canva.com https://canva.com" },
        ],
      },
    ];
  },
};

export default nextConfig;
