const path = require("node:path");

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

// This check ensures the paths are only applied for the production build
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
        // ✅ ADD THIS LINE for static exports
        unoptimized: true,
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