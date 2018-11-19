import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body,
  div,
  html,
  span {
    border: 0;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  body,
  html {
    height: 100%;
    width: 100%;
  }

  *,
  body {
    font-family: Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
