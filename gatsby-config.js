module.exports = {
  siteMetadata: {
    title: `Roomr`,
    description: `Roomr is room management made easy, free, and open-source.`,
    author: `paul-schaaf`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `roomr`,
        short_name: `roomr`,
        start_url: `/`,
        background_color: `#1e4363`,
        theme_color: `#1e4363`,
        display: `minimal-ui`,
        icon: `src/images/roomr_icon.png`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
