const {DiceRoll, Dice} = require('@dice-roller/rpg-dice-roller');
const npc = require('../commands/cypher/npc');
const {
  descriptor,
  type,
  focusA,
  focusB,
  disposition,
  creatures,
  motivations,
  loot,
} = require('./npcs/tables');
const {rollOnTable} = require('./tables');

function generateNpc(level = null, npc = 'npc', details = 'basic') {
  if (!level) level = new DiceRoll('1d10').total;
  const hp = new DiceRoll(`3 * ${level - 1} + 1d20`).total;
  const damage = new DiceRoll(`1d4 + ${level}`).total;
  const drops = rollOnTable('1d8', loot);

  if (details === 'basic') {
    return `L${level} HP ${hp}, damage ${damage}\n**loot:** ${drops}`;
  }

  if (npc === 'creature') {
    return (
      `L${level} ${rollOnTable('1d20', creatures)}\n` +
      `HP ${hp}, damage ${damage}\n` +
      `**motivation:** ${rollOnTable('1d20', motivations)}\n**loot:** ${drops}`
    );
  }

  return (
    `L{$level} ${rollOnTable('1d100', descriptor)} ${rollOnTable(
      '1d100',
      type
    )} ` +
    `who ${rollOnTable('1d100', focusA)} ${rollOnTable('1d100', focusB)}\n` +
    `HP ${hp}, damage ${damage}\n` +
    `**disposition:** ${rollOnTable('1d100', disposition)}\n**loot:** ${drops}`
  );
}

module.exports = {
  generateNpc,
};
