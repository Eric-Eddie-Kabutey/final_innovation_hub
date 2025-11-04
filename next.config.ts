import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kedrus.io",
      },
    ],
  },
};

export default nextConfig;
