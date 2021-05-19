module.exports = {
  siteMetadata: {
    title: `EC Synthetic Services`,
    description: `Source code for ecsyntheticservices.com`,
    author: `Alexis Ortiz Ojeda`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-197269089-1"],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans"],
        },
      },
    },
    `gatsby-plugin-image`,
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
        name: `ec-synthetic-services`,
        short_name: `ecss`,
        start_url: `/`,
        background_color: `#001489`,
        theme_color: `#001489`,
        display: `minimal-ui`,
        icon: `src/images/text_logo_home.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
