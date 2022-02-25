import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  li {
    list-style: none;
    padding: 5px;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px; 
    padding: 5px;
    height: 1.5rem;
    width: 1.5rem;
    text-decoration: none;
  }

  a:hover {
    color: var(--pink);
    border: 1px solid var(--pink);
    border-radius: 50%;
    transform: scale(1.1);
   
  }


  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 25%;
    margin: 0;
    padding: 0 0 50px 0;
    align-items: start;

    a {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;
