import React from "react";
import PropTypes from "prop-types";

import { MainWrapper } from "./style";
import IntroArticle from "../atoms/IntroArticle";
import WorkArticle from "../atoms/WorkArticle";
import ContributionArticle from "../atoms/ContributionArticle";
import ContactArticle from "../atoms/ContactArticle";

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
