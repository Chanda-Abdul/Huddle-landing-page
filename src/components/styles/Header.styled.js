import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 10px 10px 20px 10px;
  margin: 0 0 100px 0;
  
  background-color: var(--very-pale-cyan);
  background-size: contain;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    background-image: url("./images/bg-hero-mobile.svg");
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    background-image: url("./images/bg-hero-desktop.svg");
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 10px;
  padding: 0 10px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
  }
`;

export const Logo = styled.img`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 25vw;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 0;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px var(--grayish-blue);
  cursor: pointer;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "var(--very-dark-cyan)"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const StyledHero = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center
max-width: 100vw;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    h1 {
      padding: 20px;
      font-size: 1.5rem;
      line-height: 2.25rem;
      margin: 0;
      text-align: center;
      color: ${({ color }) => color || "var(--very-dark-cyan)"};

    }
    p {
      @include call-to-action();
      padding: 5px;
      font-size: 1rem;
      margin: 10px 0;
      text-align: center;
    }
    
  }
`;

export const Image = styled.img`
  max-width: 90%;
  margin: 40px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;



//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     font-size: 0.75rem;
//     padding: 0.5rem 1.5rem;
//     margin-bottom: 40px;
//   }
// `;



//   @media (max-width: ${({ theme }) => theme.desktop}) {
//     background-image: url("./images/bg-hero-desktop.svg");
//    }
