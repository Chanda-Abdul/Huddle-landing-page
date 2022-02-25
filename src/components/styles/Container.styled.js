import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding: 0 10px 10px 10px;
  margin: 10px;
  
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 0 10px 0 10px;
    .bottom {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
    }
  }
`;
