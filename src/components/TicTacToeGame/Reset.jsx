import React from "react";
import "./Reset.css";
import GameState from "./GameState";

const Reset = ({ gameState, onReset }) => {
  if (gameState === GameState.inProgress) {
    return;
  } else {
    return (
      <div className="Reset">
        <button onClick={onReset}>Play Again</button>
      </div>
    );
  }
};

export default Reset;
