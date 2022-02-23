import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px var(--grayish-blue);
  cursor: pointer;
  font-size: .75rem;
  font-weight: 700;
  padding: 10px 30px;
  margin: 20px 10px;
  width: auto;
  align-self: center;
  background-color: ${({bg}) => bg || '#fff'};
  color: ${({color}) => color || '#333'};

  &:hover{
      opacity: 0.9;
      transform: scale(0.98);
  }
`;
