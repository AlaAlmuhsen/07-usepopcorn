import React from "react";

const average = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return (arr.reduce((acc, cur) => acc + cur, 0) / arr.length).toFixed(2);
  // return arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
};

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies You Watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} Movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating} Movies</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating} Movies</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} Movies</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
