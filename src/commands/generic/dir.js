const {SlashCommandBuilder} = require('discord.js');
const {rollOnTable} = require('../../lib/tables');

const table = [
  {min: 1, max: 1, description: 'North'},
  {min: 2, max: 2, description: 'North East'},
  {min: 3, max: 3, description: 'East'},
  {min: 4, max: 4, description: 'South East'},
  {min: 5, max: 5, description: 'South'},
  {min: 6, max: 6, description: 'South West'},
  {min: 7, max: 7, description: 'West'},
  {min: 8, max: 8, description: 'North West'},
];

const formula = '1d8';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dir')
    .setDescription('Generate a random direction'),
  async execute(interaction) {
    const {description, roll} = rollOnTable(formula, table);
    await interaction.reply(`**${description}**\n${roll.output}`);
  },
};
