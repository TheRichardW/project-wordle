import React, { useState } from "react";

function GameInput({checkGuess, disabled}) {
  const [attempt, setAttempt] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        checkGuess(attempt);
        setAttempt("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={attempt}
        disabled={disabled}
        minLength={5}
        maxLength={5}
        onChange={(e) => {
          const regex = /^[A-Za-z]+$/;
          const attemptString = e.target.value.toUpperCase();
          if (attemptString === "" || regex.test(attemptString)) {
            setAttempt(attemptString);
          }
        }}
      />
    </form>
  );
}

export default GameInput;
