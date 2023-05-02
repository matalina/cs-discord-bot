const {getRandomItem, getRandomItems} = require('./random.js');
const {subtleCyphers} = require('./cyphers/subtle');
const cyphers = [...subtleCyphers];

function getRandomCyphers(count = 3) {
  return getRandomItems(cyphers, count);
}

function getRandomCypher() {
  return getRandomItem(cyphers);
}

function printCypher(cypher) {
  const level = new DiceRoll(cypher.level).total;
  return `**L${level} ${cypher.name}:** ${cypher.effect}`;
}

module.exports = {
  getRandomCypher,
  getRandomCyphers,
  printCypher,
};
