import React from "react";
import {
  Column,
  ProjectName,
  SideProject,
  SideProjectImg,
  TechBox,
  TechItem,
  Title,
  VerticalPadding,
  Text,
  SubTitle,
  OpenSource,
  OpenSourceImg,
  PublicSpeaking,
  PublicSpeakingImg,
  ExternalLink,
} from "./style";

import sideProjectImg from "../../../../images/project.png";
import openSourceImg from "../../../../images/open-source.png";
import talkImg from "../../../../images/talk.png";

const renderTechItems = items => {
  return items.map((item, index) => <TechItem key={index}>{item}</TechItem>);
};

const ContributionArticle = ({ article, articleTimeout, close }) => (
  <article
    id="contrib"
    className={`${article === "contrib" ? "active" : ""} ${
      articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <Title className="major">Contribution</Title>
    <OpenSource>
      <span className="main">
        <OpenSourceImg src={openSourceImg} alt="Open source projects" />
      </span>
      <Column>
        <SubTitle>I've been contributing to:</SubTitle>
        <ProjectName>
          <ExternalLink
            className="url"
            href="https://github.com/apache/beam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apache Beam
          </ExternalLink>
        </ProjectName>
        <Text>
          Apache Beam is an open source unified programming model to define and
          execute data processing pipelines, including ETL, batch and stream
          processing.
        </Text>
        <ProjectName>
          <ExternalLink
            className="url"
            href="https://github.com/strapi/strapi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strapi
          </ExternalLink>
        </ProjectName>
        <Text>
          The most advanced open-source Headless-CMS to build powerful APIs with
          no effort.
        </Text>
        <ProjectName>
          <ExternalLink
            className="url"
            href="https://github.com/react-hook-form/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Hook Form
          </ExternalLink>
        </ProjectName>
        <Text>React hooks for forms validation without the hassle</Text>
      </Column>
    </OpenSource>
    <VerticalPadding />
    <PublicSpeaking>
      <span className="main">
        <PublicSpeakingImg src={talkImg} alt="Public speaking" />
      </span>
      <Column>
        <SubTitle>Some of my public speaking about tech:</SubTitle>
        <ProjectName>
          <ExternalLink
            className="url"
            href="http://bntnam.com/files/react-hooks-talk.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Setting foot on React Hooks
          </ExternalLink>
        </ProjectName>
        <Text>
          Internal talk about React Hooks which are a new addition in React
          16.8.
        </Text>
      </Column>
    </PublicSpeaking>
    <VerticalPadding />
    <SideProject>
      <span className="main">
        <SideProjectImg src={sideProjectImg} alt="Side projects" />
      </span>
      <Column>
        <SubTitle>A list of showcases:</SubTitle>
        <ProjectName>
          <ExternalLink
            className="url"
            href="https://utilodesign.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Utilo
          </ExternalLink>
        </ProjectName>
        <TechBox>
          {renderTechItems([
            "React",
            "Gatsby",
            "Node",
            "Styled Components",
            "Styled Systems",
            "Storybook",
            "HTML",
            "CSS",
          ])}
        </TechBox>
        <ProjectName>
          <ExternalLink
            className="url"
            href="https://www.polidea.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polidea
          </ExternalLink>
        </ProjectName>
        <TechBox>
          {renderTechItems([
            "React",
            "Gatsby",
            "Strapi",
            "Storybook",
            "Styled Components",
            "Styled Systems",
            "HTML",
            "CSS",
          ])}
        </TechBox>
        <ProjectName>
          <ExternalLink
            className="url"
            href="https://analytics.katalon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Katalon
          </ExternalLink>
        </ProjectName>
        <TechBox>
          {renderTechItems([
            "React",
            "Spring",
            "Hibernate",
            "SASS",
            "Bootstrap",
            "PostgreSQL",
            "HTML",
            "CSS",
          ])}
        </TechBox>
        <ProjectName>
          <ExternalLink
            className="url"
            href="https://bntn-devchat.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev Chat
          </ExternalLink>
        </ProjectName>
        <TechBox>
          {renderTechItems([
            "React",
            "Redux",
            "Firebase",
            "Semantic UI",
            "HTML",
            "CSS",
          ])}
        </TechBox>
        <ProjectName>
          <ExternalLink
            className="url"
            href="https://bntnam.com/cs-notes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Computer Science Notes
          </ExternalLink>
        </ProjectName>
        <TechBox>{renderTechItems(["Docsify"])}</TechBox>
        <ProjectName>
          <ExternalLink
            className="url"
            href="https://cssgallery.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS Gallery
          </ExternalLink>
        </ProjectName>
        <TechBox>
          {renderTechItems([
            "React",
            "Gatsby",
            "Styled Components",
            "Styled Systems",
            "HTML",
            "CSS",
          ])}
        </TechBox>
      </Column>
    </SideProject>
    {close}
  </article>
);

export default ContributionArticle;
