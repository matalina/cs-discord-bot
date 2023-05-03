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
  const drops = rollOnTable(loot);

  if (details === 'basic') {
    return `L${level} HP ${hp}, damage ${damage}\n**loot:** ${drops}`;
  }

  if (npc === 'creature') {
    return (
      `L${level} ${rollOnTable(creatures)}\n` +
      `HP ${hp}, damage ${damage}\n` +
      `**motivation:** ${rollOnTable(motivations)}\n**loot:** ${drops}`
    );
  }

  return (
    `L{$level} ${rollOnTable(descriptor)} ${rollOnTable(type)} ` +
    `who ${rollOnTable(focusA)} ${rollOnTable(focusB)}\n` +
    `HP ${hp}, damage ${damage}\n` +
    `**disposition:** ${rollOnTable(disposition)}\n**loot:** ${drops}`
  );
}

module.exports = {
  generateNpc,
};
