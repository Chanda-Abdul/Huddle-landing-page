import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px var(--grayish-blue);
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 10px 40px;
  margin: 20px 50px;
  min-width: fit-content;
  align-self: center;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "var(--very-dark-cyan)"};

  &:hover {
    opacity: 0.5;
    transform: scale(0.98);
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    max-width: 30vw;
  }
`;
