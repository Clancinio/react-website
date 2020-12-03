import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    background: #1b1b1b;
    color: white;
  }
  button {
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    cursor: pointer;
    border: 2px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background-color: #23d997;
    }
  }
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  h4 {
    font-weight: bold;
    font-size: 1.3rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
  a {
    font-size: 101rem;
  }
`;

export default GlobalStyles;