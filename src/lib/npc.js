const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const npc = require('../commands/cypher/npc');

const disposition = [
  {min: 1, max: 2, description: 'Shy'},
  {min: 3, max: 4, description: 'Aloof/Superior'},
  {min: 5, max: 8, description: 'Foolish/Idiotic'},
  {min: 9, max: 10, description: 'Cocky/Arrogant'},
  {min: 11, max: 12, description: 'Envious'},
  {min: 13, max: 14, description: 'Grumpy'},
  {min: 15, max: 16, description: 'Mischievous (good or evil)'},
  {min: 17, max: 20, description: 'Playful/Joking'},
  {min: 21, max: 22, description: 'Insane'},
  {min: 23, max: 24, description: 'Abrupt/Unpredictable'},
  {min: 25, max: 26, description: 'Melancholic/Airy'},
  {min: 27, max: 30, description: 'Romantic'},
  {min: 31, max: 32, description: 'Frustrated'},
  {min: 33, max: 34, description: 'Stressed'},
  {min: 35, max: 36, description: 'Weird'},
  {min: 37, max: 40, description: 'Serene/Peaceful'},
  {min: 41, max: 42, description: 'Cagy/Mysterious'},
  {min: 43, max: 44, description: 'Distracted'},
  {min: 45, max: 46, description: 'Sad'},
  {min: 47, max: 50, description: 'Single Minded'},
  {min: 51, max: 52, description: 'Angry'},
  {min: 53, max: 54, description: 'Blase'},
  {min: 55, max: 56, description: 'Joyous'},
  {min: 57, max: 60, description: 'Vengeful'},
  {min: 61, max: 62, description: 'Malicious'},
  {min: 63, max: 64, description: 'Afraid'},
  {min: 65, max: 66, description: 'Disgusted'},
  {min: 67, max: 70, description: 'Resignation'},
  {min: 71, max: 72, description: 'Nostalgic'},
  {min: 73, max: 74, description: 'Envious'},
  {min: 75, max: 76, description: 'Determined'},
  {min: 77, max: 80, description: 'Pity'},
  {min: 81, max: 82, description: 'Disdain'},
  {min: 83, max: 85, description: 'Hopelessness'},
  {min: 86, max: 88, description: 'Amused'},
  {min: 89, max: 92, description: 'Reckless'},
  {min: 93, max: 95, description: 'Lonely'},
  {min: 96, max: 98, description: 'Frivolous'},
  {min: 99, max: 100, description: 'Disoriented'},
];

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
