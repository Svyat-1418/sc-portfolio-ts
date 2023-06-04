import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  body {
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.colors.bgColor};
    padding-left: 30rem;
  }
  
  a {
    text-decoration: unset;
  }
  
  button {
    background-color: unset;
  }
  
  ul {
    list-style-type: none;
  }
  
  section {
    padding: 2rem;
  }
`
