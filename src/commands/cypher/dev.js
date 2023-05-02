const {SlashCommandBuilder} = require('discord.js');
const {rollDeveloper} = require('../../lib/developer');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dev')
    .setDescription('Generate a developer'),
  async execute(interaction) {
    const {dev, roll} = rollDeveloper();
    await interaction.reply(`**Developer**\n${dev}\n${roll.output}`);
  },
};
