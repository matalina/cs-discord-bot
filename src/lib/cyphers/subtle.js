const {rollOnTable} = require('../tables');

const subtleCyphers = [
  {
    name: 'Analeptic',
    type: 'subtle',
    level: '1d6+2',
    effect: `Restores a number of points equal to the cypher's level to the user's Speed Pool. (384)`,
  },
  {
    name: 'Best Tool',
    type: 'subtle',
    level: '1d6',
    effect: `Provides an additional asset for any one task using a tool, even if that means exceeding the normal limit of two assets. (384)`,
  },
  {
    name: 'Burst of Speed',
    type: 'subtle',
    level: '1d6',
    effect: `For one minute, a user who normally can move a short distance as an action can move a long distance instead. (385)`,
  },
  {
    name: 'Contingent Activator',
    type: 'subtle',
    level: '1d6+2',
    effect: `If the device is activated in conjunction with another cypher, the user can specify a condition under which the linked cypher will activate. The linked cypher retains the contingent command until it is used (either normally or contingently). For example, when this cypher is linked to a cypher that provides a form of healing or protection, the user could specify that the linked cypher will activate if they become damaged to a certain degree or are subject to a particular dangerous circumstance. Until the linked cypher is used, this cypher continues to count toward the maximum number of cyphers a PC can carry. (386)`,
  },
  {
    name: 'Darksight',
    type: 'subtle',
    level: '1d6',
    effect: `Grants the ability to see in the dark for five hours per cypher level. (For a more realistic game, this cypher could instead make the user specialized in low-light spotting.) (386)`,
  },
  {
    name: 'Disarm',
    type: 'subtle',
    level: '1d6+1',
    effect: `One NPC within immediate range whose level is lower than the cypher level drops whatever they are holding. (387)`,
  },
  {
    name: "Eagle's Eye",
    type: 'subtle',
    level: '1d6',
    effect: `Grants the ability to see ten times as far as normal for one hour per cypher level. (For a more realistic game, the eagleseye cypher could instead give the user two assets on tasks involving seeing to long distances.) (388)`,
  },
  {
    name: 'Effect Resistance',
    type: 'subtle',
    level: '1d6+1',
    effect: `Provides a chance for additional resistance to directly damaging effects of all kinds, such as fire, lightning, and the like, for one day. (It does not provide resistance to blunt force, slashing, or piercing attacks.) If the level of the effect is of the cypher level or lower, the user gains an additional defense roll to avoid it. On a successful defense roll, treat the attack as if the user had succeeded on their regular defense roll. (If the user is an NPC, a PC attacking them with this kind of effect must succeed on two attack rolls to harm them.) (388)`,
  },
  {
    name: 'Effort Enhancer (Combat)',
    type: 'subtle',
    level: '1d6+1',
    effect: `For the next hour, the user can apply one free level of Effort to any task (including a combat task) without spending points from a Pool. The free level of Effort provided by this cypher does not count toward the maximum amount of Effort a character can normally apply to one task. Once this free level of Effort is used, the effect of the cypher ends. (388)`,
  },
  {
    name: 'Effort Enhancer (Noncombat)',
    type: 'subtle',
    level: '1d6',
    effect: `For the next hour, the user can apply one free level of Effort to a noncombat task without spending points from a Pool. The level of Effort provided by this cypher does not count toward the maximum amount of Effort a character can normally apply to one task. Once this free level of Effort is used, the effect of the cypher ends. (388)`,
  },
  {
    name: 'Enduring Shield',
    type: 'subtle',
    level: '1d6+4',
    effect: `For the next day, the user has an asset to Speed defense rolls. (388)`,
  },
  {
    name: 'Intellect Booster',
    type: 'subtle',
    level: '1d6+2',
    effect: `Adds 1 to the user's Intellect Edge for one hour (or 2 if the cypher is level 5 or higher). (391)`,
  },
  {
    name: 'Intelligence Enhancement',
    type: 'subtle',
    level: '1d6',
    effect: `All of the user's tasks involving intelligent deduction—such as playing chess, inferring a connection between clues, solving a mathematical problem, finding a bug in computer code, and so on—are eased by two steps for one hour. In the subsequent hour, the strain hinders the same tasks by two steps. (391)`,
  },
  {
    name: 'Knowledge Enhancement',
    type: 'subtle',
    level: '1d6',
    effect: knowledgeEnhancement(),
  },
  {
    name: 'Meditation Aid',
    type: 'subtle',
    level: '1d6+2',
    effect: `Restores a number of points equal to the cypher's level to the user's Intellect Pool. (392)`,
  },
  {
    name: 'Mind Stabilizer',
    type: 'subtle',
    level: '1d6+2',
    effect: `The user gains +5 to Armor against Intellect damage. (393)`,
  },
  {
    name: 'Motion Sensor',
    type: 'subtle',
    level: '1d6+2',
    effect: `For one hour per cypher level, the user knows when any movement occurs within short range, and when large creatures or objects move within long range (the cypher distinguishes between the two). It also indicates the number and size of the creatures or objects in motion. (393)`,
  },
  {
    name: 'Nutrition and Hydration',
    type: 'subtle',
    level: '1d6+1',
    effect: `The user can go without food and water for a number of days equal to the cypher's level without ill effect. (393)`,
  },
  {
    name: 'Perfect Memory',
    type: 'subtle',
    level: '1d6',
    effect: `Allows the user to mentally record everything they see for thirty seconds per cypher level and store the recording permanently in their long-term memory. This cypher is useful for watching someone pick a specific lock, enter a complex code, or do something else that happens quickly. (393)`,
  },
  {
    name: 'Perfection',
    type: 'subtle',
    level: '1d6+2',
    effect: `The user treats their next action as if they had rolled a natural 20. (393)`,
  },
  {
    name: 'Reflex Enhancer',
    type: 'subtle',
    level: '1d6',
    effect: `All tasks involving manual dexterity—such as pickpocketing, lockpicking, juggling, operating on a patient, defusing a bomb, and so on—are eased by two steps for one hour. (395)`,
  },
  {
    name: 'Rejuvenator',
    type: 'subtle',
    level: '1d6+2',
    effect: rejuvenator(),
  },
  {
    name: 'Remembering',
    type: 'subtle',
    level: '1d6',
    effect: ` Allows the user to recall any one experience they've ever had. The experience can be no longer than one minute per cypher level, but the recall is perfect, so (for example) if they saw someone dial a phone, they will remember the number. (396)`,
  },
  {
    name: 'Repel',
    type: 'subtle',
    level: '1d6+1',
    effect: `One NPC within immediate range who is of a level lower than the cypher decides to leave, using their next five rounds to move away quickly. (396)`,
  },
  {
    name: 'Secret',
    type: 'subtle',
    level: '1d6+2',
    effect: `The user can ask the GM one question and get a general answer. The GM assigns a level to the question, so the more obscure the answer, the more difficult the task. Generally, knowledge that a PC could find by looking somewhere other than their current location is level 1, and obscure knowledge of the past is level 7. Gaining knowledge of the future is level 10, and such knowledge is always open to interpretation. The cypher cannot provide an answer to a question above its level. (396)`,
  },
  {
    name: 'Skill Boost',
    type: 'subtle',
    level: '1d6',
    effect: skillBoost(),
  },
  {
    name: 'Speed Boost',
    type: 'subtle',
    level: '1d6+2',
    effect: `Adds 1 to the user's Speed Edge for one hour (adds 2 if the cypher is level 5 or higher). (398)`,
  },
  {
    name: 'Stim',
    type: 'subtle',
    level: '1d6',
    effect: `Eases the user's next action taken by three steps. (398)`,
  },
  {
    name: 'Strength Boost',
    type: 'subtle',
    level: '1d6+2',
    effect: `Adds 1 to Might Edge for one hour (or 2 if the cypher is level 5 or higher). (398)`,
  },
  {
    name: 'Strength Enhancer',
    type: 'subtle',
    level: '1d6',
    effect: `All noncombat tasks involving raw strength—such as breaking down a door, lifting a heavy boulder, forcing open elevator doors, competing in a weightlifting competition, and so on—are eased by two steps for one hour. (398)`,
  },
  {
    name: 'Tissue Regeneration',
    type: 'subtle',
    level: '1d6+4',
    effect: `For the next hour, the user regains 1 point lost to damage per round, up to a total number of points equal to twice the cypher's level. As each point is regained, they choose which Pool to add it to. If all their Pools are at maximum, the regeneration pauses until they take more damage, at which point it begins again (if any time remains in the hour) until the duration expires. (399)`,
  },
  {
    name: 'Skill Boost',
    type: 'subtle',
    level: '1d6',
    effect: skillBoost(),
  },
];

function knowledgeEnhancement() {
  const table = [
    {min: 1, max: 10, description: 'Melee attacks'},
    {min: 11, max: 20, description: 'Ranged attacks'},
    {
      min: 21,
      max: 40,
      description:
        'One type of academic or esoteric lore (biology, history, magic, and so on)',
    },
    {
      min: 41,
      max: 50,
      description: 'Repairing (sometimes specific to one device)',
    },
    {min: 51, max: 60, description: 'Crafting (usually specific to one thing)'},
    {min: 61, max: 70, description: 'Persuasion'},
    {min: 71, max: 75, description: 'Healing'},
    {min: 76, max: 80, description: 'Speed Defense'},
    {min: 81, max: 85, description: 'Intellect defense'},
    {min: 86, max: 90, description: 'Swimming'},
    {min: 91, max: 95, description: 'Riding'},
    {min: 96, max: 100, description: 'Sneaking'},
  ];
  return `For the next day, the character has training in ${
    rollOnTable('1d100', table).description
  } (and ${
    rollOnTable('1d100', table).description
  } if the cypher is level 5 or higher). (391)`;
}

function rejuvenator() {
  const table = [
    {min: 1, max: 50, description: 'Might Pool'},
    {min: 51, max: 75, description: 'Speed Pool'},
    {min: 76, max: 100, description: 'Intellect Pool'},
  ];

  return `Restores a number of points equal to the cypher's level to ${
    rollOnTable('1d100', table).description
  }. (395) `;
}

function skillBoost() {
  const table = [
    {min: 1, max: 15, description: 'Melee attack'},
    {min: 16, max: 30, description: 'Ranged attack'},
    {min: 31, max: 40, description: 'Speed defense'},
    {min: 41, max: 50, description: 'Might defense'},
    {min: 41, max: 60, description: 'Intellect defense'},
    {min: 61, max: 68, description: 'Jumping'},
    {min: 69, max: 76, description: 'Climbing'},
    {min: 77, max: 84, description: 'Running'},
    {min: 85, max: 92, description: 'Swimming'},
    {min: 93, max: 94, description: 'Sneaking'},
    {min: 95, max: 96, description: 'Balancing'},
    {min: 97, max: 98, description: 'Perceiving'},
    {min: 99, max: 99, description: 'Carrying'},
    {min: 100, max: 100, description: 'Escaping'},
  ];
  return `Dramatically but temporarily alters the user's mind and body so they can ease ${rollOnTable(
    '1d100',
    table
  )} action by three steps. Once activated, this boost can be used a number of times equal to the cypher's level, but only within a twenty-four-hour period. The boost takes effect each time the action is performed. For example, a level 3 cypher boosts the first three times that action is attempted. (397)`;
}

module.exports = {
  subtleCyphers,
};
