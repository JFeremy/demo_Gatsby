module.exports = {
    siteMetadata: {
      title: 'Demo Gatsby JS'
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: 'src/utils/typography.js'
        }
      }
    ]
  }