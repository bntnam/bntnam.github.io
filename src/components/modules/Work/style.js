import styled from "styled-components";

export const Column = styled.div`
  display: column;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  color: #222f3e;
`;

export const LineExp = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const LineImg = styled.img`
  width: 6.5rem;
  margin-right: 1rem;
  margin-top: 0.4rem;
  border-radius: 50%;

  @media (max-width: 576px) {
    display: block;
    margin: 0 auto 1rem auto;
  }
`;

export const PolideaExp = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const PolideaImg = styled.img`
  width: 6.5rem;
  margin-right: 1rem;
  margin-top: 0.4rem;
  border-radius: 50%;

  @media (max-width: 576px) {
    display: block;
    margin: 0 auto 1rem auto;
  }
`;

export const KatalonExp = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const KatalonImg = styled.img`
  width: 6.5rem;
  margin-top: 0.4rem;
  border-radius: 50%;

  @media (max-width: 576px) {
    display: block;
    margin: 0 auto 1rem auto;
  }
`;

export const Position = styled.h3`
  color: #222f3e;
  font-size: 1.5rem;
  text-transform: none;
  letter-spacing: 0.1rem;
  margin: 0;
  line-height: 2;
`;

export const Company = styled.h4`
  color: #222f3e;
  font-size: 1rem;
  text-transform: none;
  letter-spacing: 0.1rem;
  margin: 0;
  line-height: 2;
`;

export const Description = styled.p``;
