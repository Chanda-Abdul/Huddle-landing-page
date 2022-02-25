import styled from "styled-components";

export const CallToActionStyled = styled.div`
  position: absolute;
  text-align: center;
  width: 90vw;
  border-radius: 15px;
  box-shadow: 0 0 10px var(--pale-grayish-blue);
  margin: 25px 0;
  padding: 20px 10px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "var(--very-dark-cyan)"};
  @include call-to-action();

  h2 {
    font-size: 1.1rem;
    padding: 10px;
  }

  button {
    font-size: 0.75rem;
    padding: 15px 50px;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 70vw;
    margin: 5px 15vw;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 25vw;
    margin: 5px 15vw;
  }
`;
