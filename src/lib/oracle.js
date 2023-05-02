const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {getRandomKeywords} = require('./keywords.js');
const {rollOnTable} = require('./tables.js');

const oracle = [
  {min: 1, max: 2, description: 'No, and'},
  {min: 3, max: 7, description: 'No'},
  {min: 8, max: 9, description: 'No, but'},
  {min: 10, max: 10, description: 'Maybe'},
  {min: 11, max: 12, description: 'Yes, but'},
  {min: 13, max: 18, description: 'Yes'},
  {min: 19, max: 20, description: 'Yes, and'},
];

function getAnswer() {
  let keywords = [];

  const notation = `1d20`;
  const {description, roll} = rollOnTable(notation, oracle);
  if (description.includes('and') || description.includes('but')) {
    keywords = getRandomKeywords();
  }
  return {answer: description, roll, keywords};
}

module.exports = {
  getAnswer,
};
