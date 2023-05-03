const {DiceRoll, Dice} = require('@dice-roller/rpg-dice-roller');
const npc = require('../commands/cypher/npc');
const {
  descriptors,
  types,
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
    return `L${level} HP ${hp}, damage ${damage}\n**loot:** ${drops.description}`;
  }

  if (npc === 'creature') {
    return (
      `L${level} ${rollOnTable('1d20', creatures).description}\n` +
      `HP ${hp}, damage ${damage}\n` +
      `**motivation:** ${
        rollOnTable('1d20', motivations).description
      }\n**loot:** ${drops.description}`
    );
  }

  return (
    `L${level} ${rollOnTable('1d100', descriptors).description} ${
      rollOnTable('1d100', types).description
    } ` +
    `who ${rollOnTable('1d100', focusA).description} ${
      rollOnTable('1d100', focusB).description
    }\n` +
    `HP ${hp}, damage ${damage}\n` +
    `**disposition:** ${
      rollOnTable('1d100', disposition).description
    }\n**loot:** ${drops.description}`
  );
}

module.exports = {
  generateNpc,
};
