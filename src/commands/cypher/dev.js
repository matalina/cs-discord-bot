const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dev')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    const {dev, roll} = rollDeveloper();
    await interaction.reply(`**Developer**\n${dev}\n${roll.output}`);
  },
};
