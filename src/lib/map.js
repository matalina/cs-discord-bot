const {getRandomKeywords} = require('./keywords');
const {rollOnTable} = require('./tables');

const types = [
  {min: 1, max: 1, description: 'The Wilderness', name: 'wild'},
  {min: 2, max: 2, description: 'An Urban Area', name: 'urban'},
  {min: 3, max: 3, description: 'Inside Something', name: 'inside'},
  {min: 4, max: 4, description: 'Space', name: 'space'},
];

const connections = [
  {min: 1, max: 2, description: 'Crossroads'},
  {min: 3, max: 3, description: 'A T-intersection'},
  {min: 4, max: 4, description: 'A Straightaway'},
  {min: 5, max: 5, description: 'A curve/corner/turn'},
  {min: 6, max: 6, description: 'Special'},
];

const wild = [
  {min: 1, max: 1, description: 'Plains'},
  {min: 2, max: 2, description: 'Mountains'},
  {min: 3, max: 3, description: 'Settlement'},
  {min: 4, max: 4, description: 'Forest'},
  {min: 5, max: 5, description: 'Swamp'},
  {min: 6, max: 6, description: 'Special'},
];

const urban = [
  {min: 1, max: 1, description: 'Business District'},
  {min: 2, max: 2, description: 'Residential District'},
  {min: 3, max: 3, description: 'Marketplace'},
  {min: 4, max: 4, description: 'Entertainment District'},
  {min: 5, max: 5, description: 'Government District'},
  {min: 6, max: 6, description: 'Special'},
];

const space = [
  {min: 1, max: 1, description: 'Void'},
  {min: 2, max: 2, description: 'Planet'},
  {min: 3, max: 3, description: 'Star'},
  {min: 4, max: 4, description: 'Moon'},
  {min: 5, max: 5, description: 'Floater'},
  {min: 6, max: 6, description: 'Special'},
];
const baseInside = [
  {min: 1, max: 1, description: 'Lit/Open'},
  {min: 2, max: 2, description: 'Lit/Locked'},
  {min: 3, max: 3, description: 'Dark/Open'},
  {min: 4, max: 4, description: 'Dark/Locked'},
];

const inside = [
  ...baseInside,
  {min: 5, max: 5, description: secret()},
  {min: 6, max: 6, description: 'Special'},
];

function secret() {
  return `Secret and ${rollOnTable('1d4', baseInside).description}`;
}

function randomType() {
  return rollOnTable('1d4', types);
}

function randomConnection() {
  return rollOnTable('1d6', connections);
}

function randomWilderness() {
  return rollOnTable('1d6', wild);
}

function randomUrban() {
  return rollOnTable('1d6', urban);
}

function randomInside() {
  return rollOnTable('1d6', inside);
}

function randomSpace() {
  return rollOnTable('1d6', space);
}

const terrain = {
  inside: randomInside,
  space: randomSpace,
  urban: randomUrban,
  wild: randomWilderness,
};

function generateRoom(type) {
  const connection = randomConnection();
  const room = terrain[type]();
  const inspiration = getRandomKeywords();
  return (
    `${room.description}\n` +
    `**Connections:** ${connection.description}\n` +
    `${inspiration.join(', ')}`
  );
}

function generateMap(cols = 5, rows = 5, type = null) {
  const map = [];
  if (type === null) type = rollOnTable('1d4', types).name;
  for (let i = 0; i < cols; i++) {
    map[i] = [];
    for (let j = 0; j < rows; j++) {
      map[i][j] = generateRoom(type);
    }
  }
  return map;
}

module.exports = {
  generateMap,
  generateRoom,
  randomConnection,
  randomInside,
  randomSpace,
  randomType,
  randomUrban,
  randomWilderness,
  secret,
};
