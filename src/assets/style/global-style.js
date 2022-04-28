import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F1F1F1;
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyle;
