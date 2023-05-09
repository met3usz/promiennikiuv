import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  word-break: break-word;
}

h1 {
  font-weight: bold;
}

h2 {
  font-size: 1.5em;
  font-weight: bold;
}

h3{
  font-size: 1.17em;
  font-weight: bold; 
}
`;
