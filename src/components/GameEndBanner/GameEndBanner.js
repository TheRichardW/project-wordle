import React from "react";
import Banner from "../Banner/Banner";

function GameEndBanner({ status, value, reset }) {
  const classNameStub = status === "win" ? "happy" : "sad";
  
  let sentence = "";
  if (status === "win") {
    sentence = (
      <>
        <strong>Congratulations</strong> Got it in
      </>
    );
  } else {
    sentence = "Sorry the correct answer is";
  }

  let result = "";
  if (status === "win") {
    result = value > 1 ? value + " guesses" : 1 + " guess";
  } else {
    result = value;
  }

  return (
    <Banner className={classNameStub}>
      <p>
        {sentence} <strong>{result}</strong>
      </p>
      <button onClick={reset}>Reset Game</button>
    </Banner>
  );
}

export default GameEndBanner;
