import React from "react";
import { ButtonWrapper } from "./styled.button";

const Button = ({ children, inverted, width }) => {
  return (
    <ButtonWrapper inverted={inverted} width={width}>
      <button className="back">
        <span className="front flex__center">{children}</span>
      </button>
    </ButtonWrapper>
  );
};

export default Button;
