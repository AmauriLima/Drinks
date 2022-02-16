import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    @media (max-width: 600px) {
      font-size: 87.5%;
      html {
        width: 100%;
      }
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700px;
  }

  button {
    :not(:disabled) {
      cursor: pointer;
    }

    :hover:not(:disabled) {
      filter: brightness(0.8);
    }
  }

  ul li {
    list-style: none;
  }
`;
