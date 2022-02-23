import React from "react";
import { Button } from "./styles/Button.styled";
import { CallToActionStyled } from "./styles/CallToAction.styled";

const CallToAction = () => {
  return (
    <>
      <CallToActionStyled>
        <div>
          <h2>Ready to Build Your Community?</h2>
          <Button bg="var(--pink)" color="var(--very-pale-cyan)">
            Get Started For Free
          </Button>
        </div>
      </CallToActionStyled>
    </>
  );
};

export default CallToAction;
