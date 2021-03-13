import styled from "styled-components";

export const Title = styled.h1`
  text-transform: capitalize;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 33px;

  @media (max-width: 720px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  text-transform: none !important;
  font-weight: 700;
  font-size: 1.1rem !important;
`;

export const ExternalLink = styled.a`
  font-weight: 700;
`;
