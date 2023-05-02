const {SlashCommandBuilder} = require('discord.js');
const {getAnswer} = require('../../lib/oracle');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Ask a yes or no question and get an answer')
    .addStringOption((option) => {
      return option
        .setName('question')
        .setDescription('ask a question')
        .setRequired(true);
    })
    .addStringOption((option) => {
      return option
        .setName('probability')
        .setDescription(
          'i-impossible, hu-highly unlikely, u-unlikely, p-possible, l-likely, hl-highly likely, c-certainly'
        );
    }),
  async execute(interaction) {
    const question = interaction.options.getString('question');
    const mod = interaction.options.getString('probability') ?? 'p';
    const {answer, roll, keywords} = getAnswer(mod);
    let output = `**Q:** ${question}\n${roll.output}`;
    if (keywords !== []) {
      output += `\n${keywords.join(', ')}`;
    }
    await interaction.reply(output);
  },
};
