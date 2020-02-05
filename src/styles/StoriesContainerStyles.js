import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #202020;
    background-color: #fafafa;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

export const StoriesContainerWrapper = styled.main`
  max-width: 1140px;
  padding: 20px 15px;
  margin: auto;
`;
export const StoryFooter = styled.footer`
  position: fixed;
  left: 16px;
  bottom: 24px;

  a {
    color: #000;
    text-decoration: none;
    display: flex;
  }

  a:hover {
    text-decoration: underline;
  }

  div {
    margin-left: 8px;
    margin-top: 4px;
  }
`;
