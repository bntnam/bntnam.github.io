module.exports = {
  siteMetadata: {
    title: 'Software Engineer - Nam',
    author: 'Nam Bui',
    description:
      "Hi I'm Nam or JKey. A Software Engineer who is trying to be more full-stack day by day. 🔥🔥🔥",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'bntnam',
        short_name: 'bntnam',
        start_url: '/',
        background_color: '#F19066',
        theme_color: '#F19066',
        display: 'standalone',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    'gatsby-plugin-sass',
  ],
};
