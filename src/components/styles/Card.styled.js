import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || "column"};
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px var(--grayish-blue);
  margin: 10px ;
  padding: 10px;

  img {
    width: 60%;
  }
  & > div {
    flex: 1;
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin: 50px 5px;
    padding: 5px;
    text-align: center;

    img {
      width: 60vw;
      padding:50px 10px 10px 10px;
    }

    h2 {
      @include heading();
     
      padding: 20px 0;
    }
    p {
      width: 75vw;
      @include body();
      color: var(--grayish-blue);
     font-size: 1rem;
     padding: 5px;
     margin:10px 10px 50px 10px;
    }
  }
`;
