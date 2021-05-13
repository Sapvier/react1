import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
  }
  p {
    font-size: 1.6rem;
  }
  h2 {
    font-size: 2.2rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {    
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15), 
                        0 0 0 1000px rgba(255,255,255,0.01) inset;    
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export default GlobalStyles;