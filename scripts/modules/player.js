const Player = (mark, name = "Player", isIA = false, score = 0) => {
  //Name
  const getName = () => name;

  //Mark
  const getMark = () => mark;

  //Score
  const getScore = () => score;
  const incrementScore = () => score++;
  const resetScore = () => (score = 0);

  return { getName, getMark, getScore, incrementScore, resetScore };
};

export { Player };
