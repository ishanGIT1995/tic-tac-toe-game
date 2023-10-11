import React from "react";
import GameState from "./GameState";
const GameOver = ({ gameState }) => {
  if (gameState === GameState.inProgress) {
    return <></>;
  } else if (gameState === GameState.playerXwins) {
    return <h1>Congratulations! 🎉 X wins</h1>;
  } else if (gameState === GameState.playerOwins) {
    return <h1>Congratulations! 🎉 O wins</h1>;
  } else if (gameState === GameState.draw) {
    return <h1 style={{ textAlign: "center" }}>Game DRAW</h1>;
  }
};

export default GameOver;
