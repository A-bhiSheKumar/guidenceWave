/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig



// {
//   "name": "promptwave",
//   "version": "0.1.0",
//   "private": true,
//   "scripts": {
//     "dev": "next dev",
//     "build": "next build",
//     "start": "next start",
//     "lint": "next lint"
//   },
//   "dependencies": {
//     "bcrypt": "^5.1.1",
//     "mongodb": "^6.2.0",
//     "mongoose": "^7.6.3",
//     "next": "13.3.4",
//     "next-auth": "^4.24.4",
//     "react": "^18",
//     "react-dom": "^18"
//   },
//   "devDependencies": {
//     "autoprefixer": "^10",
//     "postcss": "^8",
//     "tailwindcss": "^3"
//   }
// }
