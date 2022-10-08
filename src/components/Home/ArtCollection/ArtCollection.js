import React from "react";
import searchIcon from "../../../assets/images/search.svg";
import line from "../../../assets/images/line.svg";
import arrow from "../../../assets/images/Arrow.svg";
import CollectionCard from "./CollectionCard";
import { ArtCollectionStyles } from "./styled.artcollection";
import Button from "../../Button/Button";

const ArtCollection = ({ data }) => {
  return (
    <ArtCollectionStyles>
      <div className="main_padding">
        <div className="flex__center">
          <div className="heading">
            <h2>Art in the collection</h2>
            <p>
              Browse a curated selection of art around the world, including{" "}
              <br /> museum exhibitions, gallery openings, upcoming and many{" "}
              <br /> more
            </p>
          </div>
          <div className="input">
            <img src={searchIcon} alt="" />
            <input placeholder="Search" />
          </div>
        </div>

        <div className="collections">
          {data.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
      <div className="footer">
        <img src={line} alt="" />
        <Button inverted width="200px">
          Explore more <img src={arrow} alt="" className="arrow" />{" "}
        </Button>
      </div>
    </ArtCollectionStyles>
  );
};

export default ArtCollection;
