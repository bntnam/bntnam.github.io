import styled from "styled-components";

export const MainWrapper = styled.div`
  color: #222f3e;
  font-family: "Ubuntu";
  font-weight: 400;

  h2 {
    border-bottom: solid 1px #222f3e;
  }

  .icon {
    box-shadow: inset 0 0 0 2px #222f3e;
    -webkit-box-shadow: inset 0 0 0 2px #222f3e;
    -moz-box-shadow: inset 0 0 0 2px #222f3e;
  }

  .icon:hover {
    color: #fff;
    background-color: #222f3e;
  }

  @media (max-width: 576px) {
    .icon {
      -webkit-appearance: none;
    }
  }
`;
