import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 10px;
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
  padding: 5px 20px;
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
    opacity: 0.50;
    transform: scale(0.95);
    background-color: var(--pink);
    color: var(--very-pale-cyan);
  }
`;

export const StyledHero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    justify-content: space-around;

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
      padding: 10px;
      font-size: 1rem;
      margin: 10px ;
      text-align: center;
    }
    button {
      align-self: center;
      margin: 30px 60px ;
    }
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    justify-content: space-around;
    margin: 25px 0;

    .hero-text {
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: left;
      padding: 25px 0;
    }
    h1 {
      width: 75%;
      padding: 20px 0 0 0;
      font-size: 1.5rem;
      line-height: 2.25rem;
      margin: 0;
      text-align: left;
      color: ${({ color }) => color || "var(--very-dark-cyan)"};
    }
    p {
      @include call-to-action();
      width: 75%;
      padding: 10px 0;
      font-size: 0.75rem;
      margin: 10px 0;
      text-align: left;
    }
    button {
      text-align: left;
      align-self: left;
      margin: 0 auto 0 0;
      font-size: 0.65rem;
      width: fit-content;
    }
  }
`;

export const Image = styled.img`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    margin: 10px 10px;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 50%;
  }
`;
