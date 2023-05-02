const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {getRandomKeywords} = require('./keywords.js');

const oracle = [
  [1, 2, 'No, and'],
  [3, 7, 'No'],
  [8, 9, 'No, but'],
  [10, 10, 'Maybe'],
  [11, 12, 'Yes, but'],
  [13, 18, 'Yes'],
  [19, 20, 'Yes, and'],
];

function getAnswer() {
  let answer = '';
  let keywords = [];

  const notation = `1d20`;
  const roll = new DiceRoll(notation);
  const ask = roll.total;
  for (let i in oracle) {
    const range = oracle[i];
    if (ask >= range[0] && ask <= range[1]) answer = range[2].toString();
  }
  if (answer.includes('and') || answer.includes('but')) {
    keywords = getRandomKeywords();
  }
  return {answer, roll, keywords};
}

module.exports = {
  getAnswer,
};
