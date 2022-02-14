import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  //flex-direction: ${({ layout }) => layout || "column"};
  
  

  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
  
    flex-direction: column;
    margin: 1rem 0;
  padding:3rem;
    

    img {
        width: 80vw;
      }

      h2{
          font-size: 1.25rem;
          padding: 1rem 0;
          
      }
      
 }
`;
