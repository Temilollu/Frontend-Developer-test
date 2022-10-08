import React from "react";
import searchIcon from "../../../assets/images/search.svg";
import line from "../../../assets/images/line.svg";
import arrow from "../../../assets/images/Arrow.svg";
import CollectionCard from "./CollectionCard";
import { ArtCollectionStyles } from "./styled.artcollection";
import Button from "../../Button/Button";
import LoadingSpinner from "../../Spinner/LoadingSpinner";

const ArtCollection = ({
  data,
  search,
  isLoading,
  handleChange,
  handleNext,
  page,
}) => {
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
            <input
              placeholder="Search"
              value={search}
              onChange={handleChange}
            />
          </div>
        </div>

        {isLoading && page === 1 ? (
          <LoadingSpinner />
        ) : (
          <div className="collections">
            {data.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        )}
      </div>

      {isLoading && page > 1 && (
        <div className="loading">Loading more arts...</div>
      )}
      <div className="footer">
        <img src={line} alt="" className="footer-line" />
        <Button inverted width="200px" handleClick={handleNext}>
          Explore more <img src={arrow} alt="" className="arrow" />{" "}
        </Button>
      </div>
    </ArtCollectionStyles>
  );
};

export default ArtCollection;
