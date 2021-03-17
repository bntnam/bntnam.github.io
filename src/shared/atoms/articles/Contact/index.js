import React from "react";

import { ContactArticleWrapper, Title, SubTitle, Text, Email } from "./style";

const ContactArticle = ({ article, articleTimeout, close }) => (
  <ContactArticleWrapper
    id="contact"
    className={`${article === "contact" ? "active" : ""} ${
      articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <Title className="major">Contact</Title>
    <SubTitle>Let's get in touch!</SubTitle>
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
    <Text>
      Send me an email and I will get back to you as soon as possible!
    </Text>
    <Text>
      <Email href="mailto:bntnam@gmail.com">bntnam@gmail.com</Email>
    </Text>
    <SubTitle>:&#41;</SubTitle>

    {close}
  </ContactArticleWrapper>
);

export default ContactArticle;
