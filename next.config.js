/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['meow.senither.com', 'localhost', 'picsum.photos'] // <== Domain name
  }
}

module.exports = nextConfig
