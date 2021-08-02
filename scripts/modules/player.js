/*
Factory function of Player
*/
const Player = (
  mark,
  name = "Player",
  isIA = false,
  score = 0,
  movesTable = []
) => {
  //Name
  const getName = () => name;

  //Mark
  const getMark = () => mark;

  //Score
  const getScore = () => score;
  const incrementScore = () => score++;
  const resetScore = () => (score = 0);

  //Moves table
  const getMoves = () => movesTable;
  const setMove = (cell) => movesTable.push(cell);
  const resetMoves = () => (movesTable = []);

  return {
    getName,
    getMark,
    getScore,
    incrementScore,
    resetScore,
    getMoves,
    setMove,
    resetMoves,
  };
};

export { Player };
