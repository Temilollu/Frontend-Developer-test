import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { SingleArtStyles } from "./styled.singleArt";

import moreIcon from "../../assets/images/moreVertIcon.svg";
import arrow from "../../assets/images/longerBackIcon.svg";
import lines from "../../assets/images/abu.svg";

import Button from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../Spinner/LoadingSpinner";

const SingleArtComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, data } = useQuery([`get-single-art-${id}`], async () => {
    try {
      const response = await axios.get(
        `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,catalogue_display,thumbnail`
      );
      return response?.data?.data;
    } catch (error) {
      throw error;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <SingleArtStyles>
      {" "}
      <div className="icons">
        <img
          src={arrow}
          alt=""
          className="arrow"
          onClick={() => navigate("/")}
        />
        <img src={moreIcon} alt="" />
      </div>
      <div className="content">
        <img
          src={data?.thumbnail?.lqip}
          alt={data?.thumbnail?.alt_text}
          className="frame"
        />

        <div className="more">
          <h2>{data?.title}</h2>
          {/* {api returns html hence why i'm using dangerouslySetInnerHTML, in a real project, i'd use sanitize to avoid cross-site scripting (XSS)} */}
          <p dangerouslySetInnerHTML={{ __html: data?.catalogue_display }} />

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
