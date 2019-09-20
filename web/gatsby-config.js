require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `SainDev Homepage`,
    description: ``,
    author: `SainDev`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SainDev Homepage`,
        short_name: `SainDev Home`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: true,
          storage: false,
          messaging: false,
          functions: false,
        },
      },
    },
  ],
}
