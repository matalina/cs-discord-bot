const {getRandomItem, getRandomItems} = require('./random.js');
const {subtleCyphers} = require('./cyphers/subtle');
const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
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

function getAndPrintRandomCyphers() {
  let roll = new DiceRoll('1d6');
  let cyphers = getRandomCyphers(roll.total);
  let output = `**Find 1d6 Cyphers**\n`;
  output += `${roll.output}\n`;
  for (let i in cyphers) {
    output += `${printCypher(cyphers[i])}\n`;
  }
  return output;
}

module.exports = {
  getRandomCypher,
  getRandomCyphers,
  printCypher,
  getAndPrintRandomCyphers,
};
