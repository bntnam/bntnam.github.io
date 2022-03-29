import React from "react";

import {
  Column,
  Title,
  FoodpandaExp,
  FoodpandaImg,
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
import foodpandaImg from "../../../images/foodpanda.png";
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
    <FoodpandaExp>
      <span className="main">
        <FoodpandaImg src={foodpandaImg} alt="foodpanda" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>12/2021 - Present at Foodpanda - Singapore</Company>
        <Description>
          Foodpanda is an online food and grocery delivery platform owned by
          Delivery Hero. It is currently the largest food and grocery delivery
          platform in Asia, outside of China, operating in 12 markets across
          Asia, while Delivery Hero operates in 50+ countries internationally
          and partners with 500,000+ restaurants.
        </Description>
      </Column>
    </FoodpandaExp>
    <LineExp>
      <span className="main">
        <LineImg src={naverImg} alt="NAVER" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>10/2020 - 12/2021 at NAVER Corp - Vietnam</Company>
        <Description>
          NAVER Co., Ltd. is South Korea’s largest web search engine, as well as
          a global ICT brand that provides services including LINE messenger,
          currently with over 200 million users from around the world. In 2018,
          NAVER was ranked as the 9th most innovative company by Forbes and top
          6th Future 50 company by Fortune magazine.
        </Description>
      </Column>
    </LineExp>
    <PolideaExp>
      <span className="main">
        <PolideaImg src={polideaImg} alt="Polidea" />
      </span>
      <Column>
        <Position>Software Engineer</Position>
        <Company>09/2018 - 10/2020 at Polidea - Warsaw, Poland</Company>
        <Description>
          Polidea was acquired by Snowflake on Feb 8th, 2021. In less than a
          decade, Snowflake has become a global force to help mobilize the
          world’s data. <br />
          Back then, Polidea delivered digital solutions that empowered people
          and businesses. Together, we created intuitive digital interfaces,
          enabling smooth interactions between people and technology.
        </Description>
      </Column>
    </PolideaExp>
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
