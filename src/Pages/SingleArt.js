import React from "react";
import bg from "../assets/images/Desktop.svg";
import SingleArtComponent from "../components/SingleArt/SingleArtComponent";

const SingleArt = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="single-art-page">
      <SingleArtComponent />
    </div>
  );
};

export default SingleArt;
