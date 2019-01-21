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
      },
      {
        resolve: "gatsby-source-graphql",
        options: {
          // This type will contain remote schema Query type
          typeName: "DEMOCITYV4",
          // This is the field under which it's accessible
          fieldName: "democityv4",
          // URL to query from
          url: "https://demo-city-v4-itg.smartappscenter.com/contentdelivery/graphql",
        },
      }
    ]
  }