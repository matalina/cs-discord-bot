const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {SlashCommandBuilder} = require('discord.js');
const {rollDeveloper} = require('../../lib/developer');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('task')
    .setDescription('Make a task check')
    .addStringOption((option) => {
      return option
        .setName('action')
        .setDescription('what are you trying to do')
        .setRequired(true);
    })
    .addIntegerOption((option) => {
      return option
        .setName('target')
        .setDescription('what is the target value')
        .setRequired(true);
    }),
  async execute(interaction) {
    const roll = new DiceRoll('1d20');
    const action = interaction.options.getString('action');
    const target = interaction.options.getInteger('target');
    let output = `${action}`;
    if (roll.total < target) {
      output += '\n**Fail**';
    } else {
      output += '\n**Success**';
    }
    if (roll.total === 1) {
      output += '\n_**GM Intrusion (No XP)**_';
    }
    if (roll.total === 17) {
      output += '\nDamage +1';
    }
    if (roll.total === 18) {
      output += '\nDamage +2';
    }
    if (roll.total === 19) {
      output += '\nDamage +3 or Minor Effect';
    }
    if (roll.total === 20) {
      output += '\nDamage +4 or Major Effect';
    }
    output += `\n${roll.output}`;

    const dev = rollDeveloper();
    output += `\n**Developer**\n${dev.dev}\n${dev.roll.output}`;

    await interaction.reply(output);
  },
};
