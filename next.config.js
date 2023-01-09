/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images:{
    domains:[
      "chidera-ezenwekwe-lendsqr-fe-test.vercel.app",
      "res.cloudinary.com","w0.peakpx.com","cloudflare-ipfs.com"
    ]
  }
}

module.exports = nextConfig
