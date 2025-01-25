import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  i18n: {
    locales: ['en', 'ur'], // Add your supported languages
    defaultLocale: 'en', // Default language
  },
};


export default nextConfig;
