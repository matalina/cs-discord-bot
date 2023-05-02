const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {SlashCommandBuilder} = require('discord.js');
const {getRandomCyphers, printCypher} = require('../../lib/cyphers');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cypher')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    let roll = new DiceRoll('1d6');
    let cyphers = getRandomCyphers(roll.total);
    let output = `**Find 1d6 Cyphers**\n`;
    output += `${roll.output}\n`;
    for (let i in cyphers) {
      output += `* ${printCypher(cyphers[i])}\n`;
    }
    await interaction.reply(output);
  },
};
