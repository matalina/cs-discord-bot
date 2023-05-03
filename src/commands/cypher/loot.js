const {SlashCommandBuilder} = require('discord.js');
const {loot} = require('../../lib/npcs/tables');
const {rollOnTable} = require('../../lib/tables');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('loot')
    .setDescription('Generate random loot'),
  async execute(interaction) {
    await interaction.reply(rollOnTable('1d8', loot).description);
  },
};
