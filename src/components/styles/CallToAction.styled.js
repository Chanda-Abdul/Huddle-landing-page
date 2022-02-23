import styled from "styled-components";

export const CallToActionStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: ${({ layout }) => layout || "column"};
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90vw;
  border-radius: 15px;
  box-shadow: 0 0 10px var(--grayish-blue);
  margin: 20px 0;
  padding: 20px 10px;
  background-color: ${({bg}) => bg || '#fff'};
  color: ${({color}) => color || 'var(--very-dark-cyan)'};


  h2 {
    @include heading();
   font-size: 1rem;
    padding: 10px;
  }
 
`;
