import React, { useState } from "react";
function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    const timer =
      timeRemaining > 0 && setInterval(() => setTimeRemaining((time) => time - 1), 1000);

    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false); // Auto-respond when time runs out
    }

    return () => clearInterval(timer);
  }, [timeRemaining, onAnswered]);


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }
  const { id, prompt, answers, correctIndex } = question;
  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}