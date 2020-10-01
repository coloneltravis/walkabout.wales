module.exports = {
  pathPrefix: "/walkaboutwales",
  siteMetadata: {
    title: `Walkabout Wales`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    twitterHandle: `@walkaboutwales`,
    url: `http://walkabout-wales.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-eu-central-1.graphcms.com/v2/ck39a7zkj247f01cw2r0z1lsa/master`,
        query: `{
          regionses {
            regionTitle
            regionDesc
            slug
            id
            updatedAt
            publishedAt
          }
          newses {
            id
            title
            bodyText
            publishedAt
            updatedAt
          }
        }`
      }
    },
    `gatsby-transformer-remark`
  ],
}
