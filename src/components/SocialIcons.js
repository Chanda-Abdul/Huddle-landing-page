import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      {" "}
      <li>
        <a href="https://facebook.com" aria-label="link to facebook">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href="https://twitter.com" aria-label="link to twitter">
          <FaTwitter />
        </a>
      </li>
     
      <li>
        <a href="https://instagram.com" aria-label="link to instagram">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
