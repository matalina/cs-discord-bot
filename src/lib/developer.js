const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {getRandomKeywords} = require('./keywords');

const developer = [
  () => '**Automatic Failure**',
  () => {
    const keywords = getRandomKeywords(3);
    return `**And...**\n${keywords.join(', ')}`;
  },
  () => 'None',
  () => {
    const keywords = getRandomKeywords(3);
    return `**And...**\n${keywords.join(', ')}`;
  },
  () => 'None',
  () => {
    const keywords = getRandomKeywords(3);
    return `**But...**\n${keywords.join(', ')}`;
  },
  () => 'None',
  () => {
    const keywords = getRandomKeywords(3);
    return `**But...**\n${keywords.join(', ')}`;
  },
  () => 'None',
  () => {
    const keywords = getRandomKeywords(3);
    return `**GM Intrusion: +1XP**\n${keywords.join(', ')}`;
  },
  () => {
    const keywords = getRandomKeywords(3);
    return `**GM Intrusion: +1XP**\n${keywords.join(', ')}`;
  },
  () => 'None',
  () => {
    const keywords = getRandomKeywords(3);
    return `**PC Inhibitor**\n${keywords.join(', ')}`;
  },
  () => 'None',
  () => {
    const keywords = getRandomKeywords(3);
    return `**PC Enabler**\n${keywords.join(', ')}`;
  },
  () => 'None',
  () => {
    const keywords = getRandomKeywords(3);
    return `**NPC Inhibitor**\n${keywords.join(', ')}`;
  },
  () => 'None',
  () => {
    const keywords = getRandomKeywords(3);
    return `**NPC Enabler**\n${keywords.join(', ')}`;
  },
  () => '**Automatic Success**',
];

function rollDeveloper() {
  const roll = new DiceRoll('1d20');
  return {dev: developer[roll.total](), roll};
}

module.exports = {
  rollDeveloper,
};
