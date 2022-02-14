import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  background-size: contain;
  

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: url("./images/bg-hero-mobile.svg");
  }

  @media (max-width: ${({ theme }) => theme.desktop}) {
    background-image: url("./images/bg-hero-desktop.svg");
  }
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
    width: 25vw;
  }
`;

export const StyledButton = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  font-weight: 700;

  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.75rem;
    padding: 0.5rem 1.5rem;
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 90vw;
  margin: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

export const StyledHero = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      font-size: 1.7rem;
      line-height: 2.25rem;
    }
    p {
      
      color: #000;
    }
    button {
      font-size: .75rem;
    }
  }

  //   @media (max-width: ${({ theme }) => theme.desktop}) {
  //     background-image: url("./images/bg-hero-desktop.svg");
  //    }
`;
