const Game = (() => {
  /* Private Props */
  let _isGameOver = false;
  let _round = 0;
  let _curentTurn = null;


  //Rounds
  const getRound = () => _round;
  const incrementRound = () => {
    _round++;
    getRound();
  };

  //Turns
  const getCurrentTurn = () => _curentTurn;
  const setCurrentTurn = (player) => (_curentTurn = player);

  //Game Over
  const getIsGameOver = () => _isGameOver;
  const resetGame = () => {
    _isGameOver = false;
    _round = 0;
    _curentTurn = null;
  };

  return {
    getRound,
    incrementRound,
    getCurrentTurn,
    setCurrentTurn,
    getIsGameOver,
    resetGame,
  };
})();

export { Game };
