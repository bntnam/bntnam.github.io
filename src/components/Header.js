import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  h1 {
    text-transform: capitalize;
  }

  p {
    text-transform: none !important;
    font-weight: 700;
    font-size: 1.1rem !important;
  }

  a {
    font-weight: 700;
  }
`;

const Header = props => (
  <HeaderWrapper>
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon fa-code"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Software Engineer</h1>
          <p>Hi I'm Nam. Nice to meet you!</p>
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
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('intro');
              }}
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('work');
              }}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('about');
              }}
            >
              Contrib
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </HeaderWrapper>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
