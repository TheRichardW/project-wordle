import React, { useState } from "react";
import GameInput from "../GameInput/GameInput";
import GameGuesses from "../GameGuesses/GameGuesses";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [correctChars, setCorrectChars] = useState(0);
  const [answer, setAnswer] = useState(sample(WORDS));
  console.info({ answer });

  function submitGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("Max number of guesses reached");
      return;
    }
    const checkedGuess = checkGuess(guess.toUpperCase(), answer);
    setGuesses([
      ...guesses,
      {
        guess: guess.toUpperCase(),
        chars: checkedGuess,
      },
    ]);
    setCorrectChars(
      checkedGuess.filter((char) => char.status === "correct").length
    );
  }

  function resetGame() {
    setGuesses([]);
    setCorrectChars(0);
    setAnswer(sample(WORDS));
  }

  return (
    <>
      {correctChars === 5 && (
        <Banner status="win" attempts={guesses.length} reset={resetGame} />
      )}
      {guesses.length === NUM_OF_GUESSES_ALLOWED && (
        <Banner status="lose" answer={answer} reset={resetGame} />
      )}
      <GameGuesses guesses={guesses} />
      <GameInput
        checkGuess={submitGuess}
        disabled={
          correctChars === 5 || guesses.length === NUM_OF_GUESSES_ALLOWED
        }
      />
    </>
  );
}

export default Game;
