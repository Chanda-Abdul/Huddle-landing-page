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
      @include heading();
      font-size: 1.5rem;
      padding: 20px 0 10px 0;
    }
    p {
      @include body();
      width: 75vw;
      color: var(--grayish-blue);
      font-size: 1rem;
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
`;
