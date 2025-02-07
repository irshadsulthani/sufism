import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Roboto:wght@400;500;700&display=swap');

  /* Reset & Box Sizing */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global Styling */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f8f9fa;
    color: #2c3e50;
    line-height: 1.6;
    height: 100%;
    overflow-x: hidden;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #222;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 20px;
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #e67e22;
  }

  /* Buttons */
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  button:hover {
    opacity: 0.85;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyle;
