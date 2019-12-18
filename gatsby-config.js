module.exports = {
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
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
