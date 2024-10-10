import React, { useState } from "react";

function GameInput({checkGuess, disabled}) {
  const [guess, setGuess] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        checkGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        disabled={disabled}
        minLength={5}
        maxLength={5}
        onChange={(e) => {
          const regex = /^[A-Za-z]+$/;
          const guessString = e.target.value;
          if (guessString === "" || regex.test(guessString)) {
            setGuess(guessString);
          }
        }}
      />
    </form>
  );
}

export default GameInput;
