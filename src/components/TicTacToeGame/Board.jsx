import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Board.css";
import Tile from "./Tile";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import gameover from "./sounds/gameover.wav";
import click from "./sounds/click.wav";
// import GameState from "./GameState";

const gameOverSound = new Audio(gameover);
gameOverSound.volume = 0.3;

const clickSound = new Audio(click);
clickSound.volume = 0.6;

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  // rows
  { combo: [0, 1, 2] },
  { combo: [3, 4, 5] },
  { combo: [6, 7, 8] },
  // columns
  { combo: [0, 3, 6] },
  { combo: [1, 4, 7] },
  { combo: [2, 5, 8] },

  // diagonal
  { combo: [0, 4, 8] },
  { combo: [2, 4, 6] },
];

const checkWinner = (tiles, setGameState) => {
  for (const winningCombination of winningCombinations) {
    const { combo } = winningCombination;
    let tileValue1 = tiles[combo[0]];
    let tileValue2 = tiles[combo[1]];
    let tileValue3 = tiles[combo[2]];
    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue2 === tileValue3
    ) {
      if (tileValue1 === PLAYER_X) {
        setGameState(GameState.playerXwins);
      } else if (tileValue1 === PLAYER_O) {
        setGameState(GameState.playerOwins);
      }

      return <></>;
    }
  }

  const allTilesAreFilledIn = tiles.every((tile) => {
    return tile !== null;
  });
  if (allTilesAreFilledIn) {
    setGameState(GameState.draw);
  }
};

const Board = ({ tiles, setTiles }) => {
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [gameState, setGameState] = useState(GameState.inProgress);

  let tileIndex;

  const handleTileClick = (index) => {
    tileIndex = index;

    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[index] !== null) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
  };

  useEffect(() => {
    checkWinner(tiles, setGameState);
  }, [tiles]);

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      gameOverSound.play();
    }
  }, [gameState]);

  // a ? b : (c ? d : e)

  return (
    <div>
      {gameState === GameState.inProgress && <h1>{`${playerTurn} Turn`}</h1>}

      <Tile
        tileIndex={tileIndex}
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
  );
};

export default Board;
