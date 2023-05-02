const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const npc = require('../commands/cypher/npc');

function generateNpc(level = null) {
  if (!level) level = new DiceRoll('1d10').total;
  const hp = new DiceRoll(`3 * ${level - 1} + 1d20`).total;
  const damage = new DiceRoll(`1d4 + ${level}`).total;

  const npc = `L${level} HP ${hp}, damage ${damage}`;
  return npc;
}

module.exports = {
  generateNpc,
};
