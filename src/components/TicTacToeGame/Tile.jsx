import React from "react";
import { Button, Grid } from "@mui/material";
import "./Tile.css";

const Tile = ({ tiles, onTileClick, tileIndex, playerTurn }) => {
  let hoverClass = null;
  if (tiles[tileIndex] == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ width: "350px", height: "350px" }}
      >
        <Grid value={tiles[0]} item className="GridItem ">
          <Button
            playerTurn={playerTurn}
            onClick={() => {
              onTileClick(0);
            }}
            className={`ButtonClass `}
          >
            {tiles[0]}{" "}
          </Button>
        </Grid>
        <Grid value={tiles[1]} item className="GridItem">
          <Button
            playerTurn={playerTurn}
            onClick={() => {
              onTileClick(1);
            }}
            className={`ButtonClass `}
          >
            {tiles[1]}
          </Button>
        </Grid>
        <Grid value={tiles[2]} item className="GridItem">
          <Button
            playerTurn={playerTurn}
            onClick={() => {
              onTileClick(2);
            }}
            className={`ButtonClass `}
          >
            {tiles[2]}
          </Button>
        </Grid>
        <Grid value={tiles[3]} item className="GridItem">
          <Button
            playerTurn={playerTurn}
            onClick={() => {
              onTileClick(3);
            }}
            className="ButtonClass"
          >
            {tiles[3]}
          </Button>
        </Grid>
        <Grid value={tiles[4]} item className="GridItem ">
          <Button
            playerTurn={playerTurn}
            onClick={() => {
              onTileClick(4);
            }}
            className="ButtonClass"
          >
            {tiles[4]}
          </Button>
        </Grid>
        <Grid value={tiles[5]} item className="GridItem">
          <Button
            playerTurn={playerTurn}
            onClick={() => {
              onTileClick(5);
            }}
            className="ButtonClass"
          >
            {tiles[5]}
          </Button>
        </Grid>
        <Grid value={tiles[6]} item className="GridItem">
          <Button
            playerTurn={playerTurn}
            onClick={() => {
              onTileClick(6);
            }}
            className="ButtonClass"
          >
            {tiles[6]}
          </Button>
        </Grid>
        <Grid value={tiles[7]} item className="GridItem">
          <Button
            playerTurn={playerTurn}
            onClick={() => {
              onTileClick(7);
            }}
            className="ButtonClass"
          >
            {tiles[7]}
          </Button>
        </Grid>
        <Grid value={tiles[8]} className="GridItem" item>
          <Button
            playerTurn={playerTurn}
            onClick={() => {
              onTileClick(8);
            }}
            className="ButtonClass"
          >
            {tiles[8]}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tile;
