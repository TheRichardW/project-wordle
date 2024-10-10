import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GameGuesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((i) => {
        const guess = guesses[i];
        return (
          <p className="guess" key={i}>
            {range(0, 5, 1).map((j) => {
              if (!guess) {
                return <span className="cell" key={j}></span>;
              } else {
                const char = guess.chars[j] ?? "";
                return (
                  <span className={`cell ${char.status}`} key={j}>
                    {char.letter}
                  </span>
                );
              }
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GameGuesses;
