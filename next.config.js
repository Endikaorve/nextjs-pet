/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
};

module.exports = nextConfig;
