import React from "react";
import searchIcon from "../../../assets/images/search.svg";

const SearchBox = ({ search, handleChange }) => {
  return (
    <div className="input">
      <img src={searchIcon} alt="" />
      <input placeholder="Search..." value={search} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
