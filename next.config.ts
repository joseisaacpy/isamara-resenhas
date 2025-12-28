import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*" }],
  },
};

export default nextConfig;
