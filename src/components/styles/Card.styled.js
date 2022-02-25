import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px var(--pale-grayish-blue);
  margin: 10px;
  padding: 10px;

  img {
    width: 75%;
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
      width: 75vw;
      padding: 50px 10px 10px 10px;
    }

    h2 {
      
      font-size: 1.25rem;
      padding: 20px 0 10px 0;
    }
    p {
      font-weight: 400;
      width: 75vw;
      color: var(--grayish-blue);
      font-size: .75rem;
      padding: 10px;
      margin: 10px 0 30px 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: ${({ layout }) => layout || "row-reverse"};
    margin: 50px 5px;
    padding: 25px;
    text-align: left;
    align-items: center;
    justify-content: space-around;

    .card-body {
      display: flex;
      flex-direction: column;
      width: 70%;
      padding: 50px;
    }
    img {
      padding: 25px;
    }

    h2 {
      width: 100%;
      margin: 0;
      padding: 20px 0;
      font-size: 1.25rem;
    }
    p {
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: 0.75rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: ${({ layout }) => layout || "row-reverse"};
    margin: 50px 25px;
    padding: 25px;
    
    
    justify-content: space-between;
    /* width: auto; */

    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 35px;
    }
    img {
      width: 70%;
      padding: 25px ;

    }

    h2 {
      width: 100%;
      margin: 0;
      padding: 20px 25px;
      font-size: 1.5rem;
      text-align: left;
    }
    p {
      width: 75%;
      margin: 0;
      padding: 0 25px;
      font-size: 1rem;
      text-align: left;
    }
  }
`;
