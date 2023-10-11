import React, { useState } from "react";
import Board from "./Board";
import "./TicTacToe.css";
import GameOver from "./GameOver";
import gameState from "./GameState";

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));

  return (
    <div>
      <h1>Welcome to Tic Tac Toe 😃</h1>
      <Board tiles={tiles} setTiles={setTiles} />
      {/* <GameOver /> */}
    </div>
  );
};

export default TicTacToe;
