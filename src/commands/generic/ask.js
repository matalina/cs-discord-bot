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
    }),
  async execute(interaction) {
    const question = interaction.options.getString('question');
    const {answer, roll, keywords} = getAnswer(mod);
    let output = `**Q:** ${question}\n${roll.output}\n**${answer}**`;
    if (keywords !== []) {
      output += `\n${keywords.join(', ')}`;
    }
    await interaction.reply(output);
  },
};
