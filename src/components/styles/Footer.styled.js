import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--very-dark-cyan);
  margin: 165px 0 0 0;
  padding: 50px 0 5px 0;
  color: var(--very-pale-cyan);

  
  ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0 10px 0;
    font-size: 0.8rem;
    padding: 0;
  }

  ul li img {
    padding: 5px 0;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
   
    p {
      text-align: right;
      text-align: center;
      font-size: 0.75rem;
      padding: 10px;
      @include body();
    }
  }
`;

export const Logo = styled.img`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 0 0 40px 0;
    padding: 0 10px;
    text-align: left;
  }
`;

export const Image = styled.img`
  margin: 40px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 10px;
  }
`;
