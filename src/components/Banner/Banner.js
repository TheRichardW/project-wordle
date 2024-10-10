import React from "react";

function Banner({ status, attempts = 0, answer = false, reset }) {
  const classNameStub = status === "win" ? "happy" : "sad";
  const sentence =
    status === "win" ? (
      <>
        <strong>Congratulations</strong> Got it in
      </>
    ) : (
      "Sorry the correct answer is"
    );
  return (
    <div className={`banner ${classNameStub}`}>
      <p>
        {sentence}{" "}
        <strong>
          {status === "win"
            ? attempts > 1
              ? attempts + " guesses"
              : attempts + " guess"
            : answer}
        </strong>
      </p>
      <button onClick={reset}>Reset Game</button>
    </div>
  );
}

export default Banner;
