import { useState } from "react";
import GuessForm from "./GuessForm"
import Message from "./Message"

const GuessGame = () => {
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Start guessing!");
  const [attempts, setAttempts] = useState(0);
  const [nums, setNums] = useState([]);

  const handleGuess = (userGuess) => {
    const number = parseInt(userGuess, 10);
    setAttempts(attempts + 1);
    nums.push(`${number}, `);
    if (number === targetNumber) {
      setMessage("Correct!");
    } else if (number > targetNumber) {
      setMessage("Try a smaller number");
    } else {
      setMessage("Try a larger number");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Number Guessing Game</h1>
      <GuessForm guess={guess} setGuess={setGuess} onSubmit={handleGuess} />
      <Message text={message} attempts={attempts} arrNumbers={nums} />
    </div>
  );
};
export default GuessGame;