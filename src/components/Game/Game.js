import React, { useState } from "react";
import GameInput from "../GameInput/GameInput";
import GameGuesses from "../GameGuesses/GameGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GameEndBanner from "../GameEndBanner/GameEndBanner";

// Pick a random word on every pageload.
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
      <GameGuesses guesses={guesses} />
      <GameInput
        checkGuess={submitGuess}
        disabled={
          correctChars === 5 || guesses.length === NUM_OF_GUESSES_ALLOWED
        }
      />
      {correctChars === 5 && (
        <GameEndBanner status="win" value={guesses.length} reset={resetGame} />
      )}
      {guesses.length === NUM_OF_GUESSES_ALLOWED && (
        <GameEndBanner status="lose" value={answer} reset={resetGame} />
      )}
    </>
  );
}

export default Game;
