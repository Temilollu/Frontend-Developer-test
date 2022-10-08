import React from "react";
import { SingleArtStyles } from "./styled.singleArt";

import moreIcon from "../../assets/images/moreVertIcon.svg";
import arrow from "../../assets/images/longerBackIcon.svg";
import lines from "../../assets/images/abu.svg";

import frame from "../../assets/images/Frame 11.svg";
import Button from "../Button/Button";

const SingleArtComponent = () => {
  return (
    <SingleArtStyles>
      {" "}
      <div className="icons">
        <img src={arrow} alt="" />
        <img src={moreIcon} alt="" />
      </div>
      <div className="content">
        <img src={frame} alt="" className="frame" />

        <div className="more">
          <h2>Plastic Hears Sculpture</h2>
          <p>
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more. Browse a
            curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many moreBrowse a
            curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>

          <div className="cta">
            <Button inverted>Explore more</Button>
            <div className="secondary">Explore arts</div>
            <img src={lines} alt="" />
          </div>
        </div>
      </div>
    </SingleArtStyles>
  );
};

export default SingleArtComponent;
