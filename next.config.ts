import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // This makes images load instantly without waiting for Vercel to process them
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.postimg.cc" },
      { protocol: "https", hostname: "*.postimg.cc" },
      { protocol: "https", hostname: "image.spreadshirtmedia.com" },
      { protocol: "https", hostname: "*.digistore24.com" },
      { protocol: "https", hostname: "www.zazzle.com" },
    ],
  },
};

export default nextConfig;
