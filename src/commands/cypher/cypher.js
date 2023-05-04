const {SlashCommandBuilder} = require('discord.js');
const {getAndPrintRandomCyphers} = require('../../lib/cyphers');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cypher')
    .setDescription('Generate random cyphers')
    .addStringOption((option) => {
      return option
        .setName('type')
        .setDescription('Subtle or Manifest (or both)')
        .addChoices(
          {name: 'Subtle', value: 'subtle'},
          {name: 'Manifest', value: 'manifest'},
          {name: 'All', value: 'all'}
        );
    }),
  async execute(interaction) {
    const type = interaction.options.getString('type');
    await interaction.reply(getAndPrintRandomCyphers(type));
  },
};
