import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

export default GlobalStyled;
