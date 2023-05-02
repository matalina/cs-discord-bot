const {DiceRoll} = require('@dice-roller/rpg-dice-roller');

const modifier = {
  i: '- 8',
  hu: '- 5',
  u: '- 3',
  p: '+ 0',
  l: '+ 3',
  hl: '+ 5',
  c: '+ 8',
};

const oracle = [
  [1, 2, 'No, and'],
  [3, 7, 'No'],
  [8, 9, 'No, but'],
  [10, 10, 'Maybe'],
  [11, 12, 'Yes, but'],
  [13, 18, 'Yes'],
  [19, 20, 'Yes, and'],
];

function getAnswer(probability) {
  let answer = '';
  let keywords = [];

  const mod = modifier[probability];
  const notation = `1d20${mod}`;
  roll = new DiceRoll(notation);
  ask = roll.total;
  if (ask < 0) {
    return 'No, and';
  }
  if (ask > 20) return 'Yes, and';
  for (let i in oracle) {
    const range = oracle[i];
    if (ask >= range[0] && ask <= range[1]) answer = range[2].toString();
  }
  if (answer.includes('and') || answer.includes('but')) {
    keywords = [...getRandomKeywords()];
  }
  return {answer, roll, keywords};
}

module.exports = {
  getAnswer,
};
