import React from "react";
import CollectionCard from "../ArtCollection/CollectionCard";

const CollectionContainer = ({ data }) => {
  return (
    <>
      {data?.length === 0 ? (
        <div className="empty">No result found</div>
      ) : (
        <div className="collections">
          {data?.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      )}
    </>
  );
};

export default CollectionContainer;
