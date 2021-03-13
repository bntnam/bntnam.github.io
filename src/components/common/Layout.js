import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "../assets/scss/main.scss";
import GlobalStyle from "./GlobalStyle";

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
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            link={[{ rel: "shortcut icon", href: "/logo.ico" }]}
          >
            <meta name="author" content={data.site.siteMetadata.author} />
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
          </Helmet>
          <GlobalStyle />
          {content}
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
