/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "fal.media",
        port: "",
      },
      {
        protocol: "https",
        hostname: "v3.fal.media",
        port: "",
      },
    ],
  },
};

export default nextConfig;
