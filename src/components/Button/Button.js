import React from "react";
import { ButtonWrapper } from "./styled.button";

const Button = ({ children, inverted, width, handleClick }) => {
  return (
    <ButtonWrapper inverted={inverted} width={width}>
      <button className="back" onClick={handleClick}>
        <span className="front flex__center">{children}</span>
      </button>
    </ButtonWrapper>
  );
};

export default Button;
