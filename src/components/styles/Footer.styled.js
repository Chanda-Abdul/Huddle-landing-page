import styled from "styled-components";


export const StyledFooter = styled.footer`
  background-color: var(--very-dark-cyan);
  margin: 100px 0 0 0;
  padding: 100px 0 5px 0;
  color: var(--very-pale-cyan);

  ul li {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    margin: 0 0 10px 0;
    font-size: 0.7rem;
    line-height: 1.5;
  }

  ul li img {
    margin: 0 15px 0 0;
    padding: 5px 0;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: var(--pink);
    transform: scale(1.1); 
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    p {
      @include body();
      text-align: right;
      text-align: center;
      font-size: 0.6rem;
      padding: 5px auto;
      color: var(--grayish-blue);
      margin: 0;
    }

    .links {
      padding-top: 25px;
    }
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin: 150px 0 0 0;
    padding: 100px 0 10px 0;

    ul li {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: baseline;
      margin: 0 0 10px 0;
      padding: 0 0 10px 0;
      font-size: 0.6rem;
      line-height: 1.25;
    }

    ul li img {
      margin: 0 25px 0 0;
      padding: 5px 0;
    }
    .contact {
      display: flex;
      flex-direction: column;
      width: 30%;
      margin: 10px 0;
      padding: 0 20px 0 0;
    }
    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 10px 0;
      padding: 0 20px 0 0;
      width: 25%;
      padding: 0;
    }
   
    .end {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 25%;
      margin: 0;
      padding: 0 0 10px 0;
    }
    p {
      text-align: left;
      font-size: 0.5rem;
      padding: 10px 0;
      margin: 30px 0 10px 0;
    }
  }
`;

export const Logo = styled.img`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 40vw;
    margin: 25px 0 15px 0;
    padding: 10px 0;
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 20vw;
    margin: 0 0 10px 0;
    padding: 0 10px;
    text-align: left;
  }
`;

export const Image = styled.img`
  margin: 40px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 10px;
  }
`;
