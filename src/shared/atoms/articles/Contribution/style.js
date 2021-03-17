import styled from "styled-components";

export const Column = styled.div`
  display: column;
  margin-bottom: 1rem;
`;

export const VerticalPadding = styled.div`
  width: auto;
  height: 30px;
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

export const Title = styled.h2`
  color: #222f3e;
`;

export const SideProject = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SideProjectImg = styled.img`
  width: 6.5rem;
  margin-right: 1rem;
  margin-top: 0.4rem;

  @media (max-width: 576px) {
    display: block;
    margin: 0 auto 1rem auto;
  }
`;

export const SubTitle = styled.h5`
  color: #222f3e;
  font-size: 0.8rem;
  text-transform: none;
  letter-spacing: 0.1rem;
  margin: 0;
  line-height: 2;
`;

export const ProjectName = styled.h4`
  color: #222f3e;
  font-size: 1rem;
  text-transform: none;
  letter-spacing: 0.1rem;
  margin: 0;
  line-height: 2;
`;

export const Text = styled.p`
  margin: 0;
`;

export const OpenSource = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const OpenSourceImg = styled.img`
  width: 7.5rem;
  margin-top: 0.4rem;

  @media (max-width: 576px) {
    display: block;
    margin: 0 auto 1rem auto;
  }
`;

export const PublicSpeaking = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const PublicSpeakingImg = styled.img`
  width: 6rem;
  margin-right: 1rem;

  @media (max-width: 576px) {
    display: block;
    margin: 0 auto 1rem auto;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  border-bottom: none;
`;
