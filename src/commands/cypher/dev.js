const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dev')
    .setDescription('Generate a developer'),
  async execute(interaction) {
    const {dev, roll} = rollDeveloper();
    await interaction.reply(`**Developer**\n${dev}\n${roll.output}`);
  },
};
