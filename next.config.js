const nextraConfig = {
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'
};

const withNextra = require('nextra')(nextraConfig);

/** @type {import('next').NextConfig} */
const nextConfig = withNextra();

module.exports = nextConfig
