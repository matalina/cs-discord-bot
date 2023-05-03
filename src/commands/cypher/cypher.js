const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {SlashCommandBuilder} = require('discord.js');
const {getRandomCyphers, printCypher} = require('../../lib/cyphers');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cypher')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply(getAndPrintRandomCyphers());
  },
};
