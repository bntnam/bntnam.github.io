import React from "react";

import { VerticalPadding, Title, Text, ProfileImg } from "./style";
import profileImg from "../../../images/profile.jpg";

const IntroArticle = ({ article, articleTimeout, close }) => (
  <article
    id="intro"
    className={`${article === "intro" ? "active" : ""} ${
      articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <Title className="major">Intro</Title>
    <ProfileImg src={profileImg} alt="Profile" />
    <VerticalPadding />
    <Text>
      I am a Software Engineer with years of professional experience building
      global products to serve millions of users in various markets. During my
      journey, I have had opportunities to say "hi!" to talented teammates from
      different countries in many workplaces, such as Poland, Vietnam, and now
      Singapore.
    </Text>
    <VerticalPadding />
    {close}
  </article>
);

export default IntroArticle;
