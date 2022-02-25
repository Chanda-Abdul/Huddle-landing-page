import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

h1,
h2,
h3,
h4,
h5,
h6 {
  @include heading();
}
body {
  @include body();
  background: #fff;
  font-size: 1.15em;
  margin: 0;
 }

 p {
   line-height: 1.5;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 24px;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 32px;
  }
    
`;

export default GlobalStyles;
