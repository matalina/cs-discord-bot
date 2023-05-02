const {DiceRoll} = require('@dice-roller/rpg-dice-roller');

function generateNpc(level = null) {
  if (!level) level = new DiceRoll('1d10').total;
  const hp = new DiceRoll(`3 * ${level - 1} + 1d20`).total;
  const damage = new DiceRoll(`1d4 + ${level}`).total;

  npc = `L${level} HP ${hp}, damage ${damage}`;
}

module.exports = {
  generateNpc,
};
