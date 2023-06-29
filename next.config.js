/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    enableUndici: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  compiler:{
    styledComponents: true
  }
};

module.exports = nextConfig;
