import styled from "styled-components";

export const MainWrapper = styled.div`
  color: #222f3e;
  font-family: "Ubuntu";
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

  p {
    margin: 0;
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

  .talk-img {
    width: 6rem;
    margin-right: 1rem;
  }

  .kms-img {
    width: 6.5rem;
    margin-top: 0.4rem;
  }

  .open-source-img {
    width: 7.5rem;
    margin-top: 0.4rem;
  }

  .exp-polidea,
  .talk,
  .side-project {
    display: flex;
    flex-direction: row;
  }

  .exp-kms,
  .open-source {
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

export const Column = styled.div`
  display: column;
  margin-bottom: 1rem;
`;

export const TechBox = styled.div`
  padding-bottom: 0.5rem;
`;

export const TechItem = styled.span`
  display: inline-block;
  margin: 3px 3px 3px 0;
  padding: 2px 7px;
  border-radius: 3px;
  border: 1px solid #000000;
  background: transparent;
  font-size: 0.75rem;
  font-weight: 700;
`;

export const VerticalPadding = styled.div`
  width: auto;
  height: 30px;
`;
