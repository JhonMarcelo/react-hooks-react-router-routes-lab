import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div>
            {actor.name}

            {actor.movies.map((movies) => {
              return (
                <ul>
                  <li>{movies}</li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
