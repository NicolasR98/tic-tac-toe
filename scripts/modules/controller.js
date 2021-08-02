import { Game } from "./game.js";
import { Player } from "./player.js";

/*
handles interactions between the modules and the user interface
*/
const Controller = (() => {
  /* Private Props */
  //Displays
  const _displayPlayers = document.querySelectorAll(".player-display");
  const _displayTurnPlayer = document.querySelector(".player-name");
  const _displayRoundCounter = document.querySelector(".round-counter");

  /* Public Methods */
  const renderPlayerNames = (p1, p2) => {
    _displayPlayers[0].textContent = p1;
    _displayPlayers[1].textContent = p2;
  };

  const renderCurrentTurn = (p1, p2) => {
    //Get the curent player
    let currentTurn = Game.getCurrentTurn();
    if (!currentTurn) return (_displayTurnPlayer.textContent = "");
    //If the mark of the current player corresponds to P1 then render P1 Name, otherwise render P2 name.
    currentTurn.getMark() === p1.getMark()
      ? (_displayTurnPlayer.textContent = p2.getName())
      : (_displayTurnPlayer.textContent = p1.getName());
  };

  const renderRound = (round) => {
    _displayRoundCounter.textContent = round;
  };

  return { renderPlayerNames, renderCurrentTurn, renderRound };
})();

export { Controller };
