import React from "react";

function Search({ setSearchTerm }) {
  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <div className="searchbar">
      <label htmlFor="search">Search A name:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a  name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;