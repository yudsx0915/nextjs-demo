/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["links.papareact.com", "fakestoreapi.com", "image.tmdb.org"],
    },
    i18n,
};

module.exports = nextConfig;
