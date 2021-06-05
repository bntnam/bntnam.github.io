import React from "react";
import PropTypes from "prop-types";

import { MainWrapper } from "./style";
import Intro from "../../shared/modules/Intro";
import Work from "../../shared/modules/Work";
import Contribution from "../../shared/modules/Contribution";
import Contact from "../../shared/modules/Contact";

class Main extends React.Component {
  render() {
    const {
      article,
      articleTimeout,
      setWrapperRef,
      timeout,
      onCloseArticle,
    } = this.props;

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
        ref={setWrapperRef}
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
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
