import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <h1>Directors Page</h1>
      {directors.map((directors) => {
        return (
          <div>
            {directors.name}
            <ul>
              {directors.movies.map((movies) => {
                return <ul>{movies}</ul>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Directors;
