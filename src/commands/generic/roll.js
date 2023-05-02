const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Rolls those bones!')
    .addStringOption((option) => {
      return option.setName('dice').setDescription('dice notation to roll');
    }),
  async execute(interaction) {
    const dice = interaction.options.getString('dice') ?? '1d20';
    const roll = new DiceRoll(dice);
    await interaction.reply(`Rolling ${dice}!\n${roll.output}`);
  },
};
