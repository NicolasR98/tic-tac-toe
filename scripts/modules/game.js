import { Controller } from "./controller.js";
import { Player } from "./player.js";
import { Board } from "./board.js";

const Game = (() => {
  /* Private Props */
  const _WIN_CONBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let _round = 0;
  let _curentTurn = null;
  let _isGameOver = false;

  //Game Board
  const _btnReset = document.querySelector(".btn-reset");
  const _gameBoard = document.querySelector(".board");
  const _cells = Array.from(_gameBoard.querySelectorAll(".cell"));

  //Players
  const p1 = Player("X", "Nicolas");
  const p2 = Player("O");

  /* Public Methods */
  //Rounds
  const getRound = () => _round;
  const incrementRound = () => {
    _round++;
    getRound();
  };

  //Turns
  const getCurrentTurn = () => _curentTurn;
  const setCurrentTurn = (p1, p2) => {
    //If the current player is p1, select as current p2, otherwise select p1
    _curentTurn === p1 ? (_curentTurn = p2) : (_curentTurn = p1);
    return getCurrentTurn();
  };

  const resetGame = (p1, p2) => {
    _isGameOver = false;
    _round = 0;
    _curentTurn = null;
    Board.resetBoard();
    Controller.renderCurrentTurn();
    Controller.renderRound();
    p1.resetMoves();
    p2.resetMoves();
  };

  const isWinner = (table) => {
    return _WIN_CONBINATIONS.some((combination) => {
      return combination.every((item) => table.indexOf(item) !== -1);
    });
  };

  const playMove = (p1, p2, cell) => {
    let player = Game.setCurrentTurn(p1, p2);
    
    Board.setMark(player, cell);
    Controller.renderCurrentTurn(p1, p2);
    
    incrementRound();
    Controller.renderRound(getRound());

    if (isWinner(player.getMoves())) {
      _isGameOver = true;
      console.log(`${player.getName()} is the winner`);
    }
  }

  //Listeners
  _cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      if (e.target.textContent === "" && !_isGameOver) {
        playMove(p1, p2, cell);
      }
    });
  });

  _btnReset.addEventListener("click", () => {
    resetGame(p1, p2);
  });

  document.addEventListener("DOMContentLoaded", () => {
    Controller.renderPlayerNames(p1.getName(), p2.getName())
  })

  return {
    getRound,
    incrementRound,
    getCurrentTurn,
    setCurrentTurn,
    resetGame,
  };
})();

export { Game };
