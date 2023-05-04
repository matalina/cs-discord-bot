const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {rollOnTable} = require('../tables');

const manifestCyphers = [
  {
    name: 'Adhesion',
    type: 'manifest',
    level: '1d6',
    effect: `Effect: Allows for automatic climbing of any surface, even horizontal ones. Lasts for ten minutes per cypher level. (384)`,
  },
  {
    name: 'Antivenom',
    type: 'manifest',
    level: '1d6+2',
    effect: `Renders user immune to poisons of the cypher's level or lower for one hour per cypher level (and ends any such ongoing effects, if any, already in the user's system). (384)`,
  },
  {
    name: 'Armor reinforcer',
    type: 'manifest',
    level: '1d6+1',
    effect: armorReinforcer(),
  },
  {
    name: 'Attractor',
    type: 'manifest',
    level: '1d6+4',
    effect: `One unanchored item the user's size or smaller within long range (very long range if the cypher level is 8 or higher) is drawn immediately to them. This takes one round. The item has no momentum when it arrives. (384)`,
  },
  {
    name: 'Blackout',
    type: 'manifest',
    level: '1d6+2',
    effect: `An area within immediate range of the user becomes secure against any effect outside the area that sees, hears, or otherwise senses what occurs inside. To outside observers, the area is a "blur" to any sense applied. Taps, scrying sensors, and other direct surveillance methods are also rendered inoperative within the area for a day. (384)`,
  },
  {
    name: 'Cathonlicon',
    type: 'manifest',
    level: '1d6+2',
    effect: `Cures any disease of the cypher level or lower. (385)`,
  },
  {
    name: 'Curse bringer',
    type: 'manifest',
    level: '1d6+1',
    effect: `The cypher can be activated when given to an individual who doesn't realize its significance. The next time the victim attempts an important task when the cypher is in their possession, the task is hindered by three steps. (386)`,
  },
  {
    name: 'Death bringer',
    type: 'manifest',
    level: '1d6',
    effect: `For the next minute, when the user strikes an NPC or creature of the cypher level or lower, they can choose to make a second attack roll. If the second attack roll is a success, the target is killed. If the target is a PC, the character instead moves down one step on the damage track. (386)`,
  },
  {
    name: 'Density',
    type: 'manifest',
    level: '1d6',
    effect: `For the next day, each time the user strikes a solid creature or object with a weapon, the weapon suddenly increases dramatically in weight, causing the blow to inflict 2 additional points of damage. (386)`,
  },
  {
    name: 'Detonation',
    type: 'manifest',
    level: '1d6+2',
    effect: detonation(),
  },
  {
    name: 'Detonation (flash)',
    type: 'manifest',
    level: '1d6+2',
    effect: `Projects a small physical explosive up to a long distance away that bursts in an immediate radius, blinding all within it for one minute (ten minutes if the cypher is level 4 or higher). (386)`,
  },
  {
    name: 'Detonation (massive)',
    type: 'manifest',
    level: '1d6+2',
    effect: detonationMassive(),
  },
  {
    name: 'Detonation (pressure)',
    type: 'manifest',
    level: '1d6+2',
    effect: `Projects a small physical explosive up to a long distance away that explodes in an immediate radius, inflicting impact damage equal to the cypher's level. Also moves unattended objects out of the area if they weigh less than 20 pounds (9 kg) per cypher level. (387)`,
  },
  {
    name: 'Detonation (sonic)',
    type: 'manifest',
    level: '1d6+2',
    effect: `Projects a small physical explosive up to a long distance away that explodes with terrifying sound, deafening all in an immediate radius for ten minutes per cypher level. (387)`,
  },
  {
    name: 'Detonation (spawn)',
    type: 'manifest',
    level: '1d6+2',
    effect: detonationSpawn(),
  },
  {
    name: 'Detonation (web)',
    type: 'manifest',
    level: '1d6',
    effect: `Projects a small physical explosive up to a long distance away that explodes in an immediate radius and creates sticky strands of goo. PCs caught in the area must use a Might-based action to get out, with the difficulty determined by the cypher level. NPCs break free if their level is higher than the cypher level. (387)`,
  },
  {
    name: 'Equipment Cache',
    type: 'manifest',
    level: '1d6+1',
    effect: `The user can rummage around and produce from the cypher a desired piece of equipment (not an artifact) whose level does not exceed the cypher's level. The piece of equipment persists for up to one day, unless its fundamental nature allows only a single use (such as with a grenade). (388)`,
  },
  {
    name: 'Fireproofing',
    type: 'manifest',
    level: '1d6+4',
    effect: `The user can rummage around and produce from the cypher a desired piece of equipment (not an artifact) whose level does not exceed the cypher's level. The piece of equipment persists for up to one day, unless its fundamental nature allows only a single use (such as with a grenade). (388)`,
  },
  {
    name: 'Friction reducer',
    type: 'manifest',
    level: '1d6',
    effect: `Spread across an area up to 10 feet (3 m) square, this makes things extremely slippery. For one hour per cypher level, movement tasks in the area are hindered by three steps. (389)`,
  },
  {
    name: 'Gas bomb',
    type: 'manifest',
    level: '1d6+2',
    effect: gasBomb(),
  },
  {
    name: 'Hunter/seeker',
    type: 'manifest',
    level: '1d6',
    effect: hunterSeeker(),
  },
  {
    name: 'Infiltrator',
    type: 'manifest',
    level: '1d6',
    effect: `Tiny capsule launches and moves at great speed, mapping and scanning an unknown area. It moves 500 feet (150 m) per level, scanning an area up to 50 feet (15 m) per level away from it. It identifies basic layout, creatures, and major energy sources and either transmits this information back to the user (perhaps by telepathy or an electronic signal) or returns to the user to show what it saw. Its movement is blocked by any physical or energy barrier. (390)`,
  },
  {
    name: 'Information Sensor',
    type: 'manifest',
    level: '1d6+2',
    effect: `Over the course of one day, the user can activate the cypher a total number of times equal to its level. Each time, they can select a living creature within long range and learn the following about it: level, origin, species, name, and possibly other facts (such as an individual's credit score, home address, phone number, and related information). (391)`,
  },
  {
    name: 'Metal death',
    type: 'manifest',
    level: '1d6+2',
    effect: `Produces a stream of foam that covers an area about 3 feet by 3 feet (1 m by 1 m), transforming any metal that it touches into a substance as brittle as thin glass. The foam affects metal to a depth of about 6 inches (15 cm). (393)`,
  },
  {
    name: 'Nullification ray',
    type: 'manifest',
    level: '1d6+3',
    effect: `The user can immediately end one ongoing effect within long range that is produced by an artifact, cypher, or special ability. (393)`,
  },
  {
    name: 'Poison (emotion)',
    type: 'manifest',
    level: '1d6+2',
    effect: poisonEmotion(),
  },
  {
    name: 'Poison (mind disrupting)',
    type: 'manifest',
    level: '1d6+2',
    effect: `The victim suffers Intellect damage equal to the cypher's level and cannot take actions for a number of rounds equal to the cypher's level. (394)`,
  },
  {
    name: 'Radiation spike',
    type: 'manifest',
    level: '1d6+4',
    effect: `Delivers a powerful burst of radiation that disrupts the tissue of any creature touched, inflicting damage equal to the cypher's level. (395)`,
  },
  {
    name: 'Remote viewer',
    type: 'manifest',
    level: '1d6',
    effect: `For one hour per cypher level, the user can see everything going on in the vicinity of the cypher, regardless of the distance between them. (396)`,
  },
  {
    name: 'Shocker',
    type: 'manifest',
    level: '1d6+4',
    effect: `Delivers a powerful burst of electricity that shocks any creature touched, inflicting damage equal to the cypher's level. (396)`,
  },
  {
    name: 'Sleep inducer',
    type: 'manifest',
    level: '1d6',
    effect: `Touch puts the victim to sleep for ten minutes per cypher level or until awoken by a violent action or an extremely loud noise. (397)`,
  },
  {
    name: 'Sniper module',
    type: 'manifest',
    level: '1d6',
    effect: `For the next hour per cypher level, the effective range of the user's ranged weapon increases by one category (immediate to short, short to long, long to very long, very long to 1,000 feet [300 m]). A weapon with a range greater than very long has its range doubled. (397`,
  },
  {
    name: 'Solvent',
    type: 'manifest',
    level: '1d10',
    effect: `Dissolves 1 cubic foot of material each round. After one round per cypher level, the cypher becomes inert. (397)`,
  },
  {
    name: 'Spy',
    type: 'manifest',
    level: '1d6+2',
    effect: `Produces a tiny spying object that resists detection as a level 8 creature. The object moves at great speed, mapping and scanning an unknown area. It moves 500 feet (150 m) per level, scanning an area up to 50 feet (15 m) away from it. It identifies basic layout, creatures, and major energy sources. Its movement is blocked by any physical or energy barrier. At the end of its mapping run, it returns to the user and reports. If it discovers a predefined target during its run (such as "a creature of level 5 or higher," "a locked door," "a major energy source," and so on), it detonates instead, dealing damage equal to the cypher's level (half electrical damage, half shrapnel damage) to all creatures and objects in short range. (398)`,
  },
  {
    name: 'Tracer',
    type: 'manifest',
    level: '1d6',
    effect: `Fires a microscopic tracer that clings to any surface within short range. For the next twenty-four hours, the launcher shows the distance and direction to the tracer, as long as it is within 1 mile (100 miles if the cypher is level 3 or higher, in the same dimension if the cypher is level 6 or higher). (399)`,
  },
  {
    name: 'Uninterruptible power source',
    type: 'manifest',
    level: '1d6+4',
    effect: `Provides power to another device for up to a day. The device to be powered can be as simple as a light source or as complex as a small starcraft, assuming the cypher's level is equal to the item's power requirements. A desk lamp is a level 1 power requirement, a car engine is a level 5 power requirement, and a starship is a level 10 power requirement. (399)`,
  },
  {
    name: 'Warmth',
    type: 'manifest',
    level: '1d6',
    effect: `Keeps the user warm and comfortable, even in the harshest cold temperatures, for twenty-four hours. During this time, the user has Armor equal to the cypher's level that protects against cold damage. (400)`,
  },
  {
    name: 'Water adapter',
    type: 'manifest',
    level: '1d6',
    effect: ` The user can breathe underwater and operate at any depth (without facing the debilitating consequences of changing pressure) for four hours per cypher level. This cypher can also be used in the regular atmosphere, allowing the user to ignore ill effects from very low or very high atmospheric pressure. The cypher does not protect against vacuum. (400)`,
  },
  {
    name: 'X-ray viewer',
    type: 'manifest',
    level: '1d6+4',
    effect: `Allows the user to see through up to 2 feet (60 cm) of material of a level lower than the cypher. The effect lasts for one minute per cypher level. (400)`,
  },
];

function armorReinforcer() {
  const table = [
    {min: 1, max: 1, description: '+1 to armor'},
    {min: 2, max: 2, description: '+2 to armor'},
    {min: 3, max: 3, description: '+3 to armor'},
    {min: 4, max: 4, description: '+2 to armor, +5 against damage from fire'},
    {min: 5, max: 5, description: '+2 to armor, +5 against damage from cold'},
    {min: 6, max: 6, description: '+2 to armor, +5 against damage from acid'},
  ];

  return `The user's Armor gains ${
    rollOnTable('1d6', table).description
  } for twenty-four hours. (384)`;
}

function detonation() {
  const table = [
    {min: 1, max: 10, description: 'Cell-disrupting (harms only flesh)'},
    {min: 11, max: 30, description: 'Corrosive'},
    {min: 31, max: 40, description: 'Electrical discharge'},
    {min: 41, max: 50, description: 'Heat drain (cold)'},
    {min: 51, max: 75, description: 'Fire'},
    {min: 76, max: 100, description: 'Shrapnel'},
  ];

  return `Projects a small physical explosive up to a long distance away that explodes in an immediate radius, inflicting ${rollOnTable(
    '1d100',
    table
  )} damage equal to the cypher's level.(386)`;
}

function detonationMassive() {
  const table = [
    {min: 1, max: 10, description: 'Cell-disrupting (harms only flesh)'},
    {min: 11, max: 30, description: 'Corrosive'},
    {min: 31, max: 40, description: 'Electrical discharge'},
    {min: 41, max: 50, description: 'Heat drain (cold)'},
    {min: 51, max: 75, description: 'Fire'},
    {min: 76, max: 100, description: 'Shrapnel'},
  ];

  return `Projects a small physical explosive up to a long distance away that explodes in a short-range radius, inflicting ${rollOnTable(
    '1d100',
    table
  )} damage equal to the cypher's level. (387)`;
}

function detonationSpawn() {
  const table = [
    {min: 1, max: 10, description: 'Cell-disrupting (harms only flesh)'},
    {min: 11, max: 30, description: 'Corrosive'},
    {min: 31, max: 40, description: 'Electrical discharge'},
    {min: 41, max: 50, description: 'Heat drain (cold)'},
    {min: 51, max: 75, description: 'Fire'},
    {min: 76, max: 100, description: 'Shrapnel'},
  ];

  return `Projects a small physical explosive up to a long distance away that bursts in an immediate radius, blinding all within it for one minute and inflicting ${rollOnTable(
    '1d100',
    table
  )} damage equal to the cypher's level. The burst spawns ${
    new DiceRoll('1d6').total
  } additional detonations; in the next round, each additional detonation flies to a random spot within short range and explodes in an immediate radius. (387)`;
}

function gasBomb() {
  const table = [
    {
      min: 1,
      max: 10,
      description: 'Thick smoke: occludes sight while the cloud lasts.',
    },
    {
      min: 11,
      max: 20,
      description:
        "Choking gas: living creatures that breathe lose their actions to choking and coughing for a number of rounds equal to the cypher's level.",
    },
    {
      min: 21,
      max: 50,
      description:
        "Poison gas: living creatures that breathe suffer damage equal to the cypher's level.",
    },
    {
      min: 51,
      max: 60,
      description:
        "Corrosive gas: everything suffers damage equal to the cypher's level.",
    },
    {
      min: 61,
      max: 65,
      description:
        "Hallucinogenic gas: living creatures that breathe lose their actions to hallucinations and visions for a number of rounds equal to the cypher's level.",
    },
    {
      min: 66,
      max: 70,
      description:
        "Nerve gas: living creatures that breathe suffer Speed damage equal to the cypher's level.",
    },
    {
      min: 71,
      max: 80,
      description:
        "Mind-numbing gas: living creatures that breathe suffer Intellect damage equal to the cypher's level.",
    },
    {
      min: 81,
      max: 83,
      description:
        "Fear gas: living creatures that breathe and think flee in a random direction in fear (or are paralyzed with fear) for a number of rounds equal to the cypher's level.",
    },
    {
      min: 84,
      max: 86,
      description:
        'Amnesia gas: living creatures that breathe and think permanently lose all memory of the last minute.',
    },
    {
      min: 87,
      max: 96,
      description:
        "Sleep gas: living creatures that breathe fall asleep for a number of rounds equal to the cypher's level or until awoken by a violent action or an extremely loud noise.",
    },
    {
      min: 97,
      max: 100,
      description:
        "Rage gas: living creatures that breathe and think make a melee attack on the nearest creature and continue to do so for a number of rounds equal to the cypher's level.",
    },
  ];

  return `Thrown a short distance, this bursts in a poisonous cloud within an immediate area. The cloud lingers for ${
    new DiceRoll('1d6').total
  } rounds unless conditions dictate otherwise. ${
    rollOnTable('1d100', table).description
  }  (389)`;
}

function hunterSeeker() {
  const table = [
    {min: 1, max: 50, description: 'Inflicts 8 points of damage.'},
    {
      min: 51,
      max: 80,
      description:
        'Bears a poisoned needle that inflicts 3 points of damage plus poison.',
    },
    {
      min: 81,
      max: 90,
      description:
        'Explodes, inflicting 6 points of damage to all within immediate range.',
    },
    {
      min: 91,
      max: 95,
      description:
        'Shocks for 4 points of electricity damage, and stuns for one round per cypher level.',
    },
    {
      min: 96,
      max: 100,
      description:
        "Covers target in sticky goo that immediately hardens, holding them fast until they break free with a Might action (difficulty equal to the cypher's level + 2).",
    },
  ];

  return `With long-range movement, this intelligent missile tracks and attacks a specified target (target must be within sight when selected). If it misses, it continues to attack one additional time per cypher level until it hits. For example, a level 4 hunter/seeker will attack a maximum of five times. ${
    rollOnTable('1d100', table).description
  } (390)`;
}

function poisonEmotion() {
  const table = [
    {
      min: 1,
      max: 20,
      description:
        'Anger: Likely to attack anyone who disagrees with them. Very hard to interact with; all such actions are  hindered by two steps.',
    },
    {
      min: 21,
      max: 40,
      description: 'Fear: Flees in terror for one minute when threatened.',
    },
    {
      min: 41,
      max: 60,
      description: 'Lust: Cannot focus on any nonsexual activity.',
    },
    {min: 61, max: 75, description: 'Sadness: All tasks are hindered.'},
    {
      min: 76,
      max: 85,
      description:
        'Complacency: Has no motivation. All tasks are hindered by two steps.',
    },
    {
      min: 86,
      max: 95,
      description:
        'Joy: Easy to interact with in a pleasant manner; all pleasant interaction tasks are eased.',
    },
    {
      min: 96,
      max: 100,
      description:
        'Love: Much easier to interact with; all interaction tasks are eased by two steps, but temporary attachment is likely.',
    },
  ];
  return `The victim feels a specific ${
    rollOnTable('1d100', table).description
  } for one hour. (394)`;
}

module.exports = {
  manifestCyphers,
};
