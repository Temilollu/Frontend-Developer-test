import React from "react";
import { HeroSectionStyles } from "./styled.heroSection";
import Illusatration from "../../../assets/images/hero.svg";
import star from "../../../assets/images/Star 3.svg";
import Button from "../../Button/Button";

const HeroSection = () => {
  return (
    <HeroSectionStyles>
      {" "}
      <div className="content">
        <h1>
          Discover amazing <br /> art around the <br /> <span>world</span>
        </h1>
        <p>
          Browse a curated selection of art around the world, <br /> including
          museum exhibitions, gallery openings, <br /> upcoming and many more
        </p>
        <Button inverted>Explore arts</Button>

        <div className="star">
          <img src={star} alt="" />
        </div>
      </div>
      <div className="img-container">
        <img src={Illusatration} alt="" />
      </div>
    </HeroSectionStyles>
  );
};

export default HeroSection;
