import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

function Search() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(searchText);
  };

  return (
    <div className="search-bar">
      <div>
        <BsSearch className="search-icon" />
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default Search;
