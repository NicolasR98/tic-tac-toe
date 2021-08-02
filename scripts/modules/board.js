/*
Handles the board actions
*/
const Board = (() => {
  /* Private Props */
  const _board = document.querySelector(".board");
  const _cells = Array.from(_board.querySelectorAll(".cell"));

  /* Public Methods */
  const setMark = (player, cell) => {
    let cellNumber = parseInt(cell.dataset.cell);
    player.setMove(cellNumber);
    cell.textContent = player.getMark();
  };

  const resetBoard = () => _cells.map((cell) => (cell.textContent = ""));

  return { setMark, resetBoard };
})();

export { Board };
