import { useState } from "react";
import Box from "./components/Box";

const App = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  //check winner logic for declaration of winner
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    //its a for of loop used to derive value from winner combos

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;

      //its check the box is empty or winner logic matches or not. above used array destructuring. if its matches its return true otherwise false

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  // function run for check winner
  const isWinner = checkWinner();

  //click function to register X or 0

  const handleClick = (index) => {
    //its logic to not re-enter not null box
    if (state[index] !== null) {
      return;
    }
    //its copy of main state for selection
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    //updation of state
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  return (
    <>
      <h2 className="bg-black p-4 text-white text-center hover:text-xl hover:tracking-[8px] hover:font-[700] duration-500">
        Tic Tac Toe
      </h2>
      {isWinner ? (
        <div className="text-center">
          {isWinner} Won The Game
          <br />
          <button
            onClick={() => setState(Array(9).fill(null))}
            className=" p-2 mt-4 bg-yellow-300 rounded-lg hover:bg-yellow-400 transition-all duration-500 hover:rounded-[50px]"
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <h4 className="text-center mt-4">
            {isXTurn ? "This is X Turn" : "This is 0 Turn"}
          </h4>
          <div className="box-container  flex p-4 justify-center items-center">
            <div className="box">
              <Box value={state[0]} onClick={() => handleClick(0)} />
              <Box value={state[1]} onClick={() => handleClick(1)} />
              <Box value={state[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="box">
              <Box value={state[3]} onClick={() => handleClick(3)} />
              <Box value={state[4]} onClick={() => handleClick(4)} />
              <Box value={state[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="box">
              <Box value={state[6]} onClick={() => handleClick(6)} />
              <Box value={state[7]} onClick={() => handleClick(7)} />
              <Box value={state[8]} onClick={() => handleClick(8)} />
            </div>
          </div>
          <p className="text-center">Click Below When Its Draw </p>
          <div className=" flex justify-center ">
            <button
              onClick={() => setState(Array(9).fill(null))}
              className=" p-2 mt-4 bg-yellow-300 rounded-lg hover:bg-yellow-400 transition-all duration-500 hover:rounded-[50px]"
            >
              Play Again
            </button>
          </div>
        </>
      )}
      <footer className="bg-black text-white p-2 text-center text-xs mt-24">
        Created by Nayn{" "}
      </footer>
    </>
  );
};

export default App;
