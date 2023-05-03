const {SlashCommandBuilder} = require('discord.js');
const {generateNpc} = require('../../lib/npc');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('npc')
    .setDescription('generate a Cypher System NPC/Creature')
    .addStringOption((option) => {
      return option
        .setName('type')
        .setDescription('NPC or creature')
        .setRequired(true)
        .addChoices(
          {name: 'NPC', value: 'npc'},
          {name: 'Creature', value: 'creature'}
        );
    })
    .addStringOption((option) => {
      return option
        .setName('details')
        .setDescription('Basic or Detailed')
        .setRequired(true)
        .addChoices(
          {name: 'Basic', value: 'basic'},
          {name: 'Detailed', value: 'detailed'}
        );
    })
    .addIntegerOption((option) => {
      return option
        .setName('level')
        .setDescription('Assign it a specific level');
    }),
  async execute(interaction) {
    const type = interaction.options.getString('type');
    const details = interaction.options.getString('details');
    const level = interaction.options.getInteger('level') ?? null;
    const npc = generateNpc(level, type, details);
    await interaction.reply(npc);
  },
};
