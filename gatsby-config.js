require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Software Engineer - Nam Bui",
    author: "Nam Bui",
    description:
      "Nam is a Software Engineer with years of professional experience building global products for millions of users.",
    siteUrl: "https://bntnam.com",
    imageUrl: "/img/profile/profile.jpg",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "bntnam",
        short_name: "bntnam",
        start_url: "/",
        background_color: "#F19066",
        theme_color: "#F19066",
        display: "standalone",
        icon: "src/images/logo.png", // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DNS,
        sampleRate: 0.7,
      },
    },
  ],
};
