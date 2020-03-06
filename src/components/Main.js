import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import profileImg from '../images/profile.png';
import polideaImg from '../images/polidea.png';
import kmsTechnologyImg from '../images/kms-technology.png';
import sideProjectImg from '../images/project.png';
import openSourceImg from '../images/open-source.png';
import talkImg from '../images/talk.png';

const MainWrapper = styled.div`
  color: #222f3e;
  font-family: 'Ubuntu';
  font-weight: 400;

  h2 {
    color: #222f3e;
    border-bottom: solid 1px #222f3e;
  }

  h3,
  h4,
  h5 {
    color: #222f3e;
    text-transform: none;
    letter-spacing: 0.1rem;
    margin: 0;
    line-height: 2;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  .profile-img {
    width: 12rem;
    display: block;
    margin: 0 auto;
  }

  .button-wrapper {
    text-align: center;
    margin: 2.5rem 0;
  }

  .download-button {
    padding: 1rem 1.5rem;
    border-radius: 2rem;
  }

  .polidea-img,
  .side-project-img {
    width: 6.5rem;
    margin-right: 1rem;
    margin-top: 0.4rem;
  }

  .open-source-img {
    width: 6.5rem;
    margin-right: 1rem;
  }

  .kms-img,
  .talk-img {
    width: 6.5rem;
    margin-top: 0.4rem;
  }

  .exp-polidea,
  .open-source,
  .side-project {
    display: flex;
    flex-direction: row;
  }

  .exp-kms,
  .talk {
    display: flex;
    flex-direction: row-reverse;
  }

  #contact {
    text-align: center;
  }

  .icon {
    box-shadow: inset 0 0 0 2px #222f3e;
  }

  .icon:hover {
    color: #fff;
    background-color: #222f3e;
  }

  .email {
    color: #e15f41;
    font-size: 1.2rem;
    border-bottom: none;
  }

  .email:hover {
    text-decoration: underline;
  }

  .url {
    text-decoration: underline;
    cursor: pointer;
    border-bottom: none;
    /* word-break: break-all; */
  }

  @media (max-width: 576px) {
    .exp-polidea,
    .exp-kms,
    .open-source,
    .talk,
    .side-project {
      display: flex;
      flex-direction: column;
    }

    .polidea-img,
    .kms-img,
    .open-source-img,
    .talk-img,
    .side-project-img {
      display: block;
      margin: 0 auto 1rem auto;
    }
  }
`;

const Column = styled.div`
  display: column;
  margin-bottom: 1rem;
`;

const TechBox = styled.div`
  padding-bottom: 0.5rem;
`;

const TechItem = styled.span`
  display: inline-block;
  margin: 3px 3px 3px 0;
  padding: 2px 7px;
  border-radius: 3px;
  border: 1px solid #000000;
  background: transparent;
  font-size: 0.75rem;
  font-weight: 700;
`;

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
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* Intro */}
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="main">
            <img src={profileImg} className="profile-img" alt="" />
          </span>
          <p />
          <p>
            I am a Front-End Software Engineer with professional experience
            building the responsive web design and progressive web application.
            I specialize in JavaScript and its ecosystems such as React, Gatsby,
            Next, and Node with hands-on experience of handling Universal
            Javascript, Client Side Rendering and Server Side Rendering
            applications. I also have experience with Java and Python. Moreover,
            learning new technologies is what I am passionate about.
          </p>
          <div className="button-wrapper">
            <a
              href="./files/NamBui-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-download download-button"
            >
              {' '}
              My CV!
            </a>
          </div>
          {close}
        </article>

        {/* EXP */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <div className="exp-polidea">
            <span className="main">
              <img src={polideaImg} className="polidea-img" alt="" />
            </span>
            <Column>
              <h3>Software Engineer</h3>
              <h4>4/2019 - Present at Polidea - Warsaw, Poland</h4>
              Polidea delivers digital solutions that empower people and
              businesses. Together, we create intuitive digital interfaces,
              enabling smooth interactions between people and technology. We are
              here to translate your idea into a perfectly crafted mobile
              application, mixed reality experience, Internet of Things solution
              or the whole digital ecosystem.
            </Column>
          </div>
          <div className="exp-kms">
            <span className="main">
              <img src={kmsTechnologyImg} className="kms-img" alt="" />
            </span>
            <Column>
              <h3>Software Engineer</h3>
              <h4>6/2018 - 10/2018 at KMS Technology - Vietnam</h4>
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
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
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
                  'React',
                  'Gatsby',
                  'Node',
                  'Styled Components',
                  'Styled Systems',
                  'Storybook',
                  'HTML',
                  'CSS',
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
                  'React',
                  'Gatsby',
                  'Strapi',
                  'Storybook',
                  'Styled Components',
                  'Styled Systems',
                  'HTML',
                  'CSS',
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
                  'React',
                  'Spring',
                  'Hibernate',
                  'SASS',
                  'Bootstrap',
                  'PostgresSQL',
                  'HTML',
                  'CSS',
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
                  'React',
                  'Redux',
                  'Firebase',
                  'Semantic UI',
                  'HTML',
                  'CSS',
                ])}
              </TechBox>
            </Column>
          </div>
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
          <div className="open-source">
            <span className="main">
              <img src={openSourceImg} className="open-source-img" alt="" />
            </span>
            <Column>
              <h5>I've been contributing to:</h5>
              <h4>
                <a
                  className="url"
                  href="https://github.com/strapi/strapi/pull/3609"
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
            </Column>
          </div>
          {close}
        </article>

        {/* Contact */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
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
            <a href="mailto:bntnam.app@gmail.com" className="email">
              bntnam.app@gmail.com
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
