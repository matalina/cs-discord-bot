const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {SlashCommandBuilder} = require('discord.js');
const {rollOnTable} = require('../../lib/tables');

const high = [
  {min: 1, max: 1, description: 'A small village'},
  {min: 2, max: 2, description: 'A metropolis'},
  {min: 3, max: 3, description: 'The Nexus'},
  {min: 4, max: 4, description: 'An oasis'},
  {min: 5, max: 5, description: 'A port'},
  {min: 6, max: 6, description: 'Enchanted forest'},
  {min: 7, max: 7, description: 'A wasteland'},
  {min: 8, max: 8, description: 'Alien settlement'},
  {min: 9, max: 9, description: 'Fire plane'},
  {min: 10, max: 10, description: 'Underwater city'},
  {min: 11, max: 11, description: 'Floating city'},
  {min: 12, max: 12, description: 'Volcanic island'},
  {min: 13, max: 13, description: 'Arctic tundra'},
  {min: 14, max: 14, description: 'Abandoned castle'},
  {min: 15, max: 15, description: 'Fairy kingdom'},
  {min: 16, max: 16, description: 'Wild west town'},
  {min: 17, max: 17, description: 'Underground caverns'},
  {min: 18, max: 18, description: 'Swamp'},
  {min: 19, max: 19, description: 'Island resort'},
  {min: 20, max: 20, description: 'Jungle'},
];

const low = [
  {min: 1, max: 1, description: 'Secret underground laboratory'},
  {min: 2, max: 2, description: 'Island resort'},
  {min: 3, max: 3, description: 'Medieval fortress'},
  {min: 4, max: 4, description: 'Ghost Town'},
  {min: 5, max: 5, description: 'Amusement park'},
  {min: 6, max: 6, description: 'Mystic Garden'},
  {min: 7, max: 7, description: 'Pirate Cove'},
  {min: 8, max: 8, description: 'Haunted Mansion'},
  {min: 9, max: 9, description: 'Dark Forest'},
  {min: 10, max: 10, description: ' Ancient Ruins'},
  {min: 11, max: 11, description: ' Magical School'},
  {min: 12, max: 12, description: ' Waterfall'},
  {min: 13, max: 13, description: ' Mysterious Island'},
  {min: 14, max: 14, description: " Dragon's Lair"},
  {min: 15, max: 15, description: ' A Tower'},
  {min: 16, max: 16, description: ' Prehistoric jungle'},
  {min: 17, max: 17, description: ' Rustic countryside'},
  {min: 18, max: 18, description: ' Meteorite impact zone'},
  {min: 19, max: 19, description: ' Starship graveyard'},
  {min: 20, max: 20, description: ' The ruins of a lost city'},
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('location')
    .setDescription('Get random generic location'),
  async execute(interaction) {
    let output;
    const highLow = new DiceRoll('1d4');
    if (highLow.total <= 2) {
      output = rollOnTable('1d20', low);
    } else {
      output = rollOnTable('1d20', high);
    }

    await interaction.reply(output);
  },
};
