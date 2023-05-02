const {SlashCommandBuilder} = require('discord.js');
const {getRandomKeywords} = require('../../lib/keywords.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('inspire')
    .setDescription('Generate some inspiration')
    .addIntegerOption((option) => {
      return option
        .setName('count')
        .setDescription('how many words do you want?');
    }),
  async execute(interaction) {
    const count = interaction.options.getInteger('count') ?? 3;
    const keywords = getRandomKeywords(count);
    await interaction.reply(keywords.join(', '));
  },
};
