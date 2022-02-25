
import { Container } from "./styles/Container.styled";
import { StyledFooter, Logo, Image } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";
// import { useNavigate } from "react-router-dom";

export default function Footer() {
  // let navigate = useNavigate();
  return (
    <StyledFooter>
      <Container>
        <Logo src="./images/logo-white.svg" alt="huddle-logo" />

        <div className="bottom">
          <ul className="contact">
            <li>
              <Image src="./images/icon-location.svg" alt="location" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>

            <li>
              <Image src="./images/icon-phone.svg" alt="phone" />
              +1-543-123-4567
            </li>
            <li>
              <Image src="./images/icon-email.svg" alt="email" />
              example@huddle.com
            </li>
          </ul>

          <ul className="links">
            <div className="link">
              <li>
              {/* eslint-disable-next-line */}
                <a href ="#">About Us</a>
              </li>
              <li>
              {/* eslint-disable-next-line */}
                <a href ="#">What We Do</a>
              </li>
              <li>
             {/* eslint-disable-next-line */}
                <a href ="#">FAQ</a>
              </li>
            </div>

            <div className="link">
              <li>
               {/* eslint-disable-next-line */}
                <a href ="#">Career</a>
              </li>
              <li>
              {/* eslint-disable-next-line */}
                <a href ="#">Blog</a>
              </li>
              <li>
              {/* eslint-disable-next-line */}
                <a href ="#">Contact Us</a>
              </li>
            </div>
          </ul>

          <div className="end">
            <SocialIcons />

            <p>&copy; {new Date().getFullYear()} Huddle. All rights reserved</p>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
}
