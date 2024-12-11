/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = withVideos({
  // Your existing Next.js configuration options here
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/polycystic-ovary",
  basePath: "/polycystic-ovary",
});

export default nextConfig;
