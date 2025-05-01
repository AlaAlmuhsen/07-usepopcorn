import React from "react";

function Search({ setQuery, query }) {
  return (
    <input
      className="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      placeholder="Search Movies..."
    />
  );
}

export default Search;
