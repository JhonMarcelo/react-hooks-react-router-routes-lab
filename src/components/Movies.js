import React from "react";
import { movies } from "../data";

function Movies() {
  const itemToDisplay = movies;

  return (
    <div>
      <h1>Movies Page</h1>
      {itemToDisplay.map((movies) => {
        return (
          <div>
            <li>
              <h3>{movies.title}</h3>
              Time: {movies.time} minutes
              <ul>
                {movies.genres.map((genres) => {
                  return <li>{genres}</li>;
                })}
              </ul>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
