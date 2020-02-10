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
        endpoint: `https://api-euwest.graphcms.com/v1/ck39a7zkj247f01cw2r0z1lsa/master`,
        query: `{
            newses {
              status
              updatedAt
              createdAt
              id
              title
              bodyText
            }
        }`
      }
    },
    `gatsby-transformer-remark`
  ],
}
