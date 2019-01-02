module.exports = {
    siteMetadata: {
      title: 'https://demo-gatsbyjs.netlify.com/'
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