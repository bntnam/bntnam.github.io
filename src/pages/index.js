import React, { useCallback, useState } from "react";

import Layout from "@components/templates/Layout";
import Header from "@components/templates/Header";
import Main from "@components/templates/Main";
import Footer from "@components/templates/Footer";
import { useOutsideClick } from "@hooks/useOutsideClick";

const IndexPage = ({ location }) => {
  const [isArticleVisible, setIsArticalVisible] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [isArticleTimeout, setIsArticalTimeout] = useState(false);
  const [article, setArtical] = useState("");
  const [loading, setLoading] = useState("is-loading");

  const handleOpenArticle = useCallback(article => {
    setIsArticalVisible(true);
    setArtical(article);

    setTimeout(() => {
      setIsTimeout(true);
    }, 325);

    setTimeout(() => {
      setIsArticalTimeout(true);
    }, 350);
  }, []);

  const handleCloseArticle = useCallback(() => {
    setIsArticalTimeout(false);

    setTimeout(() => {
      setIsTimeout(false);
    }, 325);

    setTimeout(() => {
      setIsArticalVisible(false);
      setArtical("");
    }, 350);
  }, []);

  const { wrapperRef } = useOutsideClick({
    handleCloseArticle,
    isArticleVisible,
    setLoading,
  });

  return (
    <Layout location={location}>
      <div
        className={`body ${loading} ${
          isArticleVisible ? "is-article-visible" : ""
        }`}
      >
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={isTimeout} />
          <Main
            ref={wrapperRef}
            timeout={isTimeout}
            articleTimeout={isArticleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
          />
          <Footer timeout={isTimeout} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  );
};

export default IndexPage;
