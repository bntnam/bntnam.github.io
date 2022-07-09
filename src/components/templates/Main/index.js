import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import { MainWrapper } from "./style";
import Intro from "@components/modules/Intro";
import Work from "@components/modules/Work";
import Contribution from "@components/modules/Contribution";
import Contact from "@components/modules/Contact";

const Main = forwardRef(
  ({ article, articleTimeout, timeout, onCloseArticle }, ref) => {
    const close = (
      <div
        className="close"
        onClick={() => {
          onCloseArticle();
        }}
      ></div>
    );

    return (
      <MainWrapper
        ref={ref}
        id="main"
        style={timeout ? { display: "flex" } : { display: "none" }}
      >
        <Intro
          article={article}
          articleTimeout={articleTimeout}
          close={close}
        />
        <Work article={article} articleTimeout={articleTimeout} close={close} />
        <Contribution
          article={article}
          articleTimeout={articleTimeout}
          close={close}
        />
        <Contact
          article={article}
          articleTimeout={articleTimeout}
          close={close}
        />
      </MainWrapper>
    );
  }
);

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

Main.displayName = "Main";

export default Main;
