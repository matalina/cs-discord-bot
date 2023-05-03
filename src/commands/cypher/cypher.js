const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cypher')
    .setDescription('Generate random cyphers'),
  async execute(interaction) {
    await interaction.reply(getAndPrintRandomCyphers());
  },
};
