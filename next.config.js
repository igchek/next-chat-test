/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"] 
      },
      sassOptions: {
          includePaths: [path.join(__dirname, 'styles')],
        },
}

module.exports = nextConfig
