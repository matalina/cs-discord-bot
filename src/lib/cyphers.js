const {getRandomItem, getRandomItems} = require('./random.js');
const {subtleCyphers} = require('./cyphers/subtle');
const {manifestCyphers} = require('./cyphers/manifest');
const {DiceRoll} = require('@dice-roller/rpg-dice-roller');

const allCyphers = [...subtleCyphers, ...manifestCyphers];

function getRandomCyphers(count = 3, type = 'all') {
  let cyphers;
  switch (type) {
    case 'subtle':
      cyphers = allCyphers;
      break;
    case 'manifest':
      cyphers = manifestCyphers;
      break;
    case 'all':
    default:
      cyphers = allCyphers;
      break;
  }
  return getRandomItems(cyphers, count);
}

function getRandomCypher(type = 'all') {
  let cyphers;
  switch (type) {
    case 'subtle':
      cyphers = allCyphers;
      break;
    case 'manifest':
      cyphers = manifestCyphers;
      break;
    case 'all':
    default:
      cyphers = allCyphers;
      break;
  }
  return getRandomItem(cyphers);
}

function printCypher(cypher) {
  const level = new DiceRoll(cypher.level).total;
  return `**L${level} ${cypher.name}:** ${cypher.effect}`;
}

function getAndPrintRandomCyphers(type = 'all') {
  let roll = new DiceRoll('1d6');
  let cyphers = getRandomCyphers(roll.total, type);
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
