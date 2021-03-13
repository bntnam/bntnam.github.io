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
} from "./style";
import polideaImg from "../../../images/polidea.png";
import kmsTechnologyImg from "../../../images/kms-technology.png";

const WorkArticle = ({ article, articleTimeout, close }) => (
  <article
    id="work"
    className={`${article === "work" ? "active" : ""} ${
      articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <Title className="major">Work</Title>
    <PolideaExp>
      <span className="main">
        <PolideaImg src={polideaImg} alt="Polidea" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>01/2019 - Present at Polidea - Warsaw, Poland</Company>
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
        <KatalonImg src={kmsTechnologyImg} className="kms-img" alt="" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>06/2018 - 10/2018 at KMS Technology - Vietnam</Company>
        <Description>
          KMS Technology is a US-based product engineering and services company
          with development and testing centers in Vietnam. We work primarily
          with software companies to accelerate the delivery of innovative
          software solutions and make offshore outsourcing easier and more
          effective.
        </Description>
      </Column>
    </KatalonExp>
    {close}
  </article>
);

export default WorkArticle;
