import { css } from '@emotion/react';
import { Theme } from '@emotion/react';

export const globalStyles = (theme: Theme) => css`
  *, *::before, *::after {
    box-sizing: border-box;
  }

 html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background:
  #081E2E;
  color:#FFFFFF;
  scroll-behavior: smooth;
}

p {
    font-family:${theme.fonts.body};
    font-weight:${theme.fontWeights.regular};
    margin:0;
    padding:0;
}

h1 {
 font-family:${theme.fonts.body};
 padding:0;
 margin:0;
 font-weight:${theme.fontWeights.bold};
 font-size:40px;
 line-height:167%;
 letter-spacing:0;
}

h2,h3,h4 {
 font-weight:${theme.fontWeights.semibold};
 font-family:${theme.fonts.body};
 margin:0;
 padding:0;
}
 
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
  

`;