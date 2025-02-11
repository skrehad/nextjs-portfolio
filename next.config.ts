import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: "file-loader",
    });

    return config;
  },
};

export default nextConfig;
