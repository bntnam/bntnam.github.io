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
import naverImg from "../../../images/naver.png";
import polideaImg from "../../../images/polidea.png";
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
        <LineImg src={naverImg} alt="NAVER" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>10/2020 - Present at NAVER Corp - Vietnam</Company>
        <Description>
          NAVER Co., Ltd. is South Korea’s largest web search engine, as well as
          a global ICT brand that provides services including LINE messenger,
          currently with over 200 million users from around the world. In 2018,
          NAVER was ranked as the 9th most innovative company by Forbes and top
          6th Future 50 company by Fortune magazine.
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
        <Company>09/2018 - 10/2020 at Polidea - Warsaw, Poland</Company>
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
        <Position>Software Intern</Position>
        <Company>06/2018 - 09/2018 at Katalon - Vietnam</Company>
        <Description>
          Our team works to provide the digital economy with efficient test
          automation solutions, as well as building a strong community of
          testers and developers around the world.
        </Description>
      </Column>
    </KatalonExp>
    {close}
  </article>
);

export default WorkArticle;
