import React from "react";
import PropTypes from "prop-types";

import { MainWrapper } from "./style";
import IntroArticle from "../../shared/atoms/articles/Intro";
import WorkArticle from "../../shared/atoms/articles/Work";
import ContributionArticle from "../../shared/atoms/articles/Contribution";
import ContactArticle from "../../shared/atoms/articles/Contact";

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
        <IntroArticle
          article={article}
          articleTimeout={articleTimeout}
          close={close}
        />
        <WorkArticle
          article={article}
          articleTimeout={articleTimeout}
          close={close}
        />
        <ContributionArticle
          article={article}
          articleTimeout={articleTimeout}
          close={close}
        />
        <ContactArticle
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
