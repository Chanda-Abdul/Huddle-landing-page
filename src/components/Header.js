import { StyledHeader, StyledButton,  StyledHero, Nav, Logo, Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

import { Container } from "./styles/Container.styled";

export default function Header() {
  return (
    <>
    <StyledHeader>
     
        <Nav>
          <Logo src="./images/logo.svg" alt="header-logo" />
          <StyledButton>Try It Free</StyledButton>
          
        </Nav>
        
        <Container>
        <Flex>
        
          < StyledHero>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="var(--pink)" color="var(--very-pale-cyan)">Get Started For Free</Button>
          </ StyledHero>
          <Image src='./images/illustration-mockups.svg' alt=''/>
        </Flex>
      </Container>
      </StyledHeader>
      </>
  );
}
