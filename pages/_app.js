import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AlurakutStyles } from "../src/lib/AluraCommons";

const GlobalStyle = createGlobalStyle`
/* reset CSS simples */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {   
    background-color: #D9E6F6;
    font-family: sans-serif;
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  /* reset imagem */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  //pré carregamento de css da lib
  ${AlurakutStyles}
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
