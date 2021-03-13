import React from "react";

import {
  Column,
  VerticalPadding,
  Title,
  PolideaExp,
  PolideaImg,
  KatalonExp,
  KatalonImg,
  Position,
  Company,
  Description,
  LineExp,
  LineImg,
} from "./style";
import polideaImg from "../../../images/polidea.png";
import lineImg from "../../../images/line.png";
import katalonImg from "../../../images/katalon.jpeg";

const WorkArticle = ({ article, articleTimeout, close }) => (
  <article
    id="work"
    className={`${article === "work" ? "active" : ""} ${
      articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <Title className="major">Work</Title>
    <LineExp>
      <span className="main">
        <LineImg src={lineImg} alt="Line" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>10/2020 - Present at Line - Vietnam</Company>
        <Description>
          With the LINE messaging app as the cornerstone, LINE Corporation's
          business encompasses development and operation of a wide range of
          mobile-first services—including communication, content, and
          entertainment—and advertising, as well as new businesses in Fintech,
          AI, and other domains.
        </Description>
      </Column>
    </LineExp>
    <VerticalPadding />
    <PolideaExp>
      <span className="main">
        <PolideaImg src={polideaImg} alt="Polidea" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>01/2019 - 10/2020 at Polidea - Warsaw, Poland</Company>
        <Description>
          Polidea delivers digital solutions that empower people and businesses.
          Together, we create intuitive digital interfaces, enabling smooth
          interactions between people and technology. We are here to translate
          your idea into a perfectly crafted mobile application, mixed reality
          experience, Internet of Things solution or the whole digital
          ecosystem.
        </Description>
      </Column>
    </PolideaExp>
    <VerticalPadding />
    <KatalonExp>
      <span className="main">
        <KatalonImg src={katalonImg} alt="Katalon" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>06/2018 - 10/2018 at Katalon - Vietnam</Company>
        <Description>
          Katalon is a powerful solution that helps you automate Web, API,
          Mobile, and Desktop apps — with smart analytics and CI/CD
          integrations.
        </Description>
      </Column>
    </KatalonExp>
    {close}
  </article>
);

export default WorkArticle;
