const {SlashCommandBuilder} = require('discord.js');
const {rollDeveloper} = require('../../lib/developer');
const {rollOnTable} = require('../../lib/tables');

table = [
  {min: 1, max: 1, description: 'Solid'},
  {min: 2, max: 2, description: 'Stable'},
  {min: 3, max: 3, description: 'Average'},
  {min: 4, max: 4, description: 'Unstable'},
  {min: 5, max: 5, description: 'Insane'},
  {min: 6, max: 6, description: 'Chaos'},
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Generate an Adventure Status'),
  async execute(interaction) {
    const {description, roll} = rollOnTable(formula, table);
    const dev = rollDeveloper();
    await interaction.reply(
      `**${description} (${roll.total})**\n${roll.output}\n**Developer**\n${dev.dev}\n${dev.roll.output}`
    );
  },
};
