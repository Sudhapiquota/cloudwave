module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index',
        permanent: true,
      },

    ]
  },
  async URLoptions() {
    return [
      {
        case: 'insensitive'
      },
    ]
  },
  rewrites: async () => {
    return [
      {
        source: "/:path",
        destination: "/:path" + "/index.html",
      },
    ]
  },  
  trailingSlash:true,
  reactStrictMode: true,
}
