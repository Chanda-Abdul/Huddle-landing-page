import styled from "styled-components";

export const Flex = styled.div`
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    text-align: center;
  }
`;
