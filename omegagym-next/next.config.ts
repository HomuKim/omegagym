import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/DefineTheBody",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
