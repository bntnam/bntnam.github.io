import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "@assets/scss/main.scss";
import GlobalStyle from "@utils/theme/GlobalStyle";

const Layout = ({ children, location }) => {
  let content;

  if (location && location.pathname === "/") {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              author
              description
              siteUrl
              imageUrl
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          author,
          description,
          siteUrl,
          imageUrl,
        } = data.site.siteMetadata;

        return (
          <>
            <Helmet
              title={title}
              link={[{ rel: "shortcut icon", href: "/logo.ico" }]}
            >
              <meta name="author" content={author} />
              <meta name="description" content={description} />
              <meta property="og:url" content={siteUrl} />
              <meta property="og:title" content={title} />
              <meta property="og:author" content={author} />
              <meta property="og:description" content={description} />
              <meta property="og:image" content={`${siteUrl}${imageUrl}`} />
            </Helmet>
            <GlobalStyle />
            {content}
          </>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
