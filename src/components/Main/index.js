import React from "react";
import PropTypes from "prop-types";

import {
  MainWrapper,
  Column,
  TechBox,
  TechItem,
  VerticalPadding,
} from "./common";
import profileImg from "../images/profile.png";
import polideaImg from "../images/polidea.png";
import kmsTechnologyImg from "../images/kms-technology.png";
import sideProjectImg from "../images/project.png";
import openSourceImg from "../images/open-source.png";
import talkImg from "../images/talk.png";

const displayItems = items => {
  return items.map((item, index) => <TechItem key={index}>{item}</TechItem>);
};

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <MainWrapper
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        {/* Intro */}
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Intro</h2>
          <span className="main">
            <img src={profileImg} className="profile-img" alt="" />
          </span>
          <VerticalPadding />
          <p>
            I am a Front-End Software Engineer with professional experience
            building the Responsive Web Design and Progressive Web Application.
            I specialize in JavaScript and its ecosystems such as React, Gatsby,
            Next, and Node with hands-on experience of handling Universal
            Javascript, Client Side Rendering, Server Side Rendering and Static
            Site Generation applications. Moreover, learning new technologies is
            what I am passionate about.
          </p>
          <div className="button-wrapper">
            <a
              href="./files/NamBui-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-download download-button"
            >
              {" "}
              My CV!
            </a>
          </div>
          {close}
        </article>

        {/* EXP */}
        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Work</h2>
          <div className="exp-polidea">
            <span className="main">
              <img src={polideaImg} className="polidea-img" alt="" />
            </span>
            <Column>
              <h3>Software Engineer</h3>
              <h4>01/2019 - Present at Polidea - Warsaw, Poland</h4>
              Polidea delivers digital solutions that empower people and
              businesses. Together, we create intuitive digital interfaces,
              enabling smooth interactions between people and technology. We are
              here to translate your idea into a perfectly crafted mobile
              application, mixed reality experience, Internet of Things solution
              or the whole digital ecosystem.
            </Column>
          </div>
          <VerticalPadding />
          <div className="exp-kms">
            <span className="main">
              <img src={kmsTechnologyImg} className="kms-img" alt="" />
            </span>
            <Column>
              <h3>Software Engineer</h3>
              <h4>06/2018 - 10/2018 at KMS Technology - Vietnam</h4>
              KMS Technology is a US-based product engineering and services
              company with development and testing centers in Vietnam. We work
              primarily with software companies to accelerate the delivery of
              innovative software solutions and make offshore outsourcing easier
              and more effective.
            </Column>
          </div>
          {close}
        </article>

        {/* Contribution */}
        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contribution</h2>
          <div className="side-project">
            <span className="main">
              <img src={sideProjectImg} className="side-project-img" alt="" />
            </span>
            <Column>
              <h5>A list of showcases:</h5>
              <h4>
                <a
                  className="url"
                  href="https://utilodesign.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Utilo
                </a>
              </h4>
              <TechBox>
                {displayItems([
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
              <h4>
                <a
                  className="url"
                  href="https://www.polidea.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Polidea
                </a>
              </h4>
              <TechBox>
                {displayItems([
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
              <h4>
                <a
                  className="url"
                  href="https://analytics.katalon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Katalon
                </a>
              </h4>
              <TechBox>
                {displayItems([
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
              <h4>
                <a
                  className="url"
                  href="https://bntn-devchat.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev Chat
                </a>
              </h4>
              <TechBox>
                {displayItems([
                  "React",
                  "Redux",
                  "Firebase",
                  "Semantic UI",
                  "HTML",
                  "CSS",
                ])}
              </TechBox>
              <h4>
                <a
                  className="url"
                  href="https://bntnam.com/cs-notes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Computer Science Notes
                </a>
              </h4>
              <TechBox>{displayItems(["Docsify"])}</TechBox>
              <h4>
                <a
                  className="url"
                  href="https://cssgallery.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Gallery
                </a>
              </h4>
              <TechBox>
                {displayItems([
                  "React",
                  "Gatsby",
                  "Styled Components",
                  "Styled Systems",
                  "HTML",
                  "CSS",
                ])}
              </TechBox>
            </Column>
          </div>
          <VerticalPadding />
          <div className="open-source">
            <span className="main">
              <img src={openSourceImg} className="open-source-img" alt="" />
            </span>
            <Column>
              <h5>I've been contributing to:</h5>
              <h4>
                <a
                  className="url"
                  href="https://github.com/apache/beam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apache Beam
                </a>
              </h4>
              <p>
                Apache Beam is an open source unified programming model to
                define and execute data processing pipelines, including ETL,
                batch and stream processing.
              </p>
              <h4>
                <a
                  className="url"
                  href="https://github.com/strapi/strapi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strapi
                </a>
              </h4>
              <p>
                The most advanced open-source Headless-CMS to build powerful
                APIs with no effort.
              </p>
              <h4>
                <a
                  className="url"
                  href="https://github.com/react-hook-form/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Hook Form
                </a>
              </h4>
              <p>React hooks for forms validation without the hassle</p>
            </Column>
          </div>
          <VerticalPadding />
          <div className="talk">
            <span className="main">
              <img src={talkImg} className="talk-img" alt="" />
            </span>
            <Column>
              <h5>Some of my public speaking about tech:</h5>
              <h4>
                <a
                  className="url"
                  href="http://bntnam.com/files/react-hooks-talk.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Setting foot on React Hooks
                </a>
              </h4>
              <p>
                Internal talk about React Hooks which are a new addition in
                React 16.8.
              </p>
            </Column>
          </div>
          {close}
        </article>

        {/* Contact */}
        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <h3>Let's get in touch!</h3>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/bntnam"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bntnam"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/bntnam"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
          </ul>
          <h5>
            Send me an email and I will get back to you as soon as possible!
          </h5>
          <h5>
            <a href="mailto:bntnam@gmail.com" className="email">
              bntnam@gmail.com
            </a>
          </h5>
          <h3>:&#41;</h3>

          {close}
        </article>
      </MainWrapper>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
