const {SlashCommandBuilder} = require('discord.js');
const {rollOnTable} = require('../../lib/tables');

const table = [
  {min: 1, max: 1, description: 'Find an item '},
  {min: 2, max: 2, description: ' Open a gate'},
  {min: 3, max: 3, description: 'Kill a villain '},
  {min: 4, max: 4, description: 'Activate a monument'},
  {min: 5, max: 5, description: 'Rescue an NPC '},
  {min: 6, max: 6, description: 'Disable an artifact'},
  {min: 7, max: 7, description: 'Uncover a secret '},
  {min: 8, max: 8, description: 'Recover an item'},
  {min: 9, max: 9, description: 'Clear out monsters '},
  {min: 10, max: 10, description: 'Convince an NPC'},
  {min: 11, max: 11, description: 'Protect a monument '},
  {min: 12, max: 12, description: 'Awaken a monster'},
  {min: 13, max: 13, description: 'Protect an NPC '},
  {min: 14, max: 14, description: 'Put a monster to sleep'},
  {min: 15, max: 15, description: 'Steal an item '},
  {min: 16, max: 16, description: 'Bury a secret'},
  {min: 17, max: 17, description: 'Return an item '},
  {min: 18, max: 18, description: 'Discover a monument'},
  {min: 19, max: 19, description: 'Close a gate '},
  {min: 20, max: 20, description: 'Dig up an artifact'},
];
const formula = '1d20';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quest')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply(rollOnTable(formula, table));
  },
};
