import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: var(--very-dark-cyan);
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--very-dark-cyan);
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
