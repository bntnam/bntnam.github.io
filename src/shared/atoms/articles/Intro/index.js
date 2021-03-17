import React from "react";

import { VerticalPadding, Title, Text, ProfileImg } from "./style";
import profileImg from "../../../../images/profile.png";

const IntroArticle = ({ article, articleTimeout, close }) => (
  <article
    id="intro"
    className={`${article === "intro" ? "active" : ""} ${
      articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <Title className="major">Intro</Title>
    <span className="main">
      <ProfileImg src={profileImg} alt="Profile" />
    </span>
    <VerticalPadding />
    <Text>
      I am a Front-End Software Engineer with professional experience building
      the Responsive Web Design and Progressive Web Application. I specialize in
      JavaScript and its ecosystem such as React, Gatsby, Next, and Node with
      hands-on experience of handling Universal Javascript, Client Side
      Rendering, Server Side Rendering and Static Site Generation applications.
      Moreover, learning new technologies is what I am passionate about.
    </Text>
    {/* Temporarily remove CV button */}
    {/* <Button>
      <ExternalLink
        href="./files/NamBui-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="icon fa-download"
      >
        {" "}
        My CV!
      </ExternalLink>
    </Button> */}
    <VerticalPadding />
    {close}
  </article>
);

export default IntroArticle;
