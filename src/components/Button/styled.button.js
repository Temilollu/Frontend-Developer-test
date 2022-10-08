import styledComponents from "styled-components";

export const ButtonWrapper = styledComponents.div`
 .back {
    background: ${({ inverted }) => (inverted ? "#FBAF00" : "white")} ;
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    border-radius: 0px 30px;
  }
  .front {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    width: ${({ width }) => (width ? width : "164px")} ;
    height: 61px;
    color: ${({ inverted }) => (inverted ? "#251A00" : "#FFFFFF")}  ;
    background: ${({ inverted }) => (inverted ? "white" : "#FBAF00")} ;
    border-radius: 0px 30px;

    border-radius: 0px 30px;
    transform: translateY(-5px) translateX(-4px);
  }

`;
