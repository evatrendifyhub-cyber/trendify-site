import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.postimg.cc" },
      { protocol: "https", hostname: "*.postimg.cc" }, // Covers all PostImg subdomains
      { protocol: "https", hostname: "image.spreadshirtmedia.com" },
      { protocol: "https", hostname: "*.digistore24.com" }, // For Digistore images
      { protocol: "https", hostname: "www.zazzle.com" },    // For Zazzle images
    ],
  },
};

export default nextConfig;
