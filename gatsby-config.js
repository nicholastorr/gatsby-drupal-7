const path = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    siteUrl: "http://stagingsupply.htm-mbs.com/",
    title: "staging-d7",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-drupal7`,
      options: {
        baseUrl: `http://stagingsupply.htm-mbs.com/`,
        apiBase: `restws_resource.json`, // optional, defaults to `restws_resource.json`
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
        skipFileDownloads: true,
      },
    },
  ],
};
