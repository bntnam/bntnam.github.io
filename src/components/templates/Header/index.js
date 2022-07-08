import React from "react";
import PropTypes from "prop-types";

import { Title, Text } from "./style";
import ArticleButton from "@components/atoms/ArticleButton";
import SocialLink from "@components/atoms/SocialLink";

const articles = [
  { type: "intro", text: "Intro" },
  { type: "work", text: "Work" },
  { type: "contrib", text: "Contrib" },
  { type: "contact", text: "Contact" },
];

const renderArticle = onOpenArticle => (article, i) => (
  <ArticleButton
    onOpenArticle={onOpenArticle}
    type={article.type}
    text={article.text}
    key={i}
  />
);

const socialLinks = [
  { url: "https://github.com/bntnam", icon: "github", text: "Github" },
  {
    url: "https://www.linkedin.com/in/bntnam",
    icon: "linkedin",
    text: "Linkedin",
  },
  {
    url: "mailto:bntnam.app@gmail.com",
    icon: "envelope-o",
    text: "Email",
  },
];

const renderSocialLink = (socialLink, i) => (
  <SocialLink
    url={socialLink.url}
    icon={socialLink.icon}
    text={socialLink.text}
    key={i}
  />
);

const Header = ({ onOpenArticle, timeout }) => (
  <header id="header" style={timeout ? { display: "none" } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <Title>Software Engineer</Title>
        <Text>Hi I'm Nam. Nice to meet you!</Text>
        <ul className="icons">{socialLinks.map(renderSocialLink)}</ul>
      </div>
    </div>
    <nav>
      <ul>{articles.map(renderArticle(onOpenArticle))}</ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
