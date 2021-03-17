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
import polideaImg from "../../../../images/polidea.png";
import lineImg from "../../../../images/line.png";
import kmsLabsImg from "../../../../images/kms-labs.png";

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
        <KatalonImg src={kmsLabsImg} alt="KMS Labs" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>06/2018 - 10/2018 at KMS Labs - Vietnam</Company>
        <Description>
          KMS Labs is a startup studio and the product development arm of KMS
          Technology. Our team includes entrepreneurs and builders who have
          lived through everyday struggles of launching and operating software
          businesses for almost 2 decades. Our startups, all originated from
          Vietnam, have acquired hundreds of thousands of users, raised funding
          from top US VCs and one was merged with a technology unicorn.
        </Description>
      </Column>
    </KatalonExp>
    {close}
  </article>
);

export default WorkArticle;
