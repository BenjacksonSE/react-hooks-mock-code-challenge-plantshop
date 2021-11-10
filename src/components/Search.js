import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // handle search func req
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}

export default Search;
