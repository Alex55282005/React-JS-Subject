const GuessForm = ({ guess, setGuess, onSubmit }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (guess) {
        onSubmit(guess);
        setGuess("");
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="border p-2 rounded w-full mb-2"
          placeholder="Enter a number"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Guess
        </button>
      </form>
    );
  };
  export default GuessForm;