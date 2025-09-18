const path = require("node:path");

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
        ],
    },
    outputFileTracingRoot: path.resolve(__dirname, '../../'),
    webpack: (config, {
        isServer
    }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }

        config.module.rules.push({
            test: /\.m?js$/,
            resolve: {
                fullySpecified: false,
            },
        });

        return config;
    },
};

module.exports = nextConfig;
