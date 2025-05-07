import React, { useEffect, useRef } from "react";
import { useKey } from "../hooks/useKey";

function Search({ setQuery, query }) {
  const inputElement = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  });

  useKey("KeyX", function () {
    console.log("test");
  });

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <input
      className="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      placeholder="Search Movies..."
      ref={inputElement}
    />
  );
}

export default Search;
