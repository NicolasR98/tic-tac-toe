const Board = (() => {
  /* Private Props */
  const _board = document.querySelector(".board");
  const _cells = Array.from(_board.querySelectorAll(".cell"));

  const setMark = (mark, cell) => {
    const selectedCell = _cells[cell];
    if (selectedCell.textContent === "") selectedCell.textContent = mark;
  };

  const resetBoard = () => _cells.map((cell) => (cell.textContent = ""));

  return { setMark, resetBoard };
})();

export { Board };
