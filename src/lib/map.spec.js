const {generateMap} = require('./map');

describe('random map generating tests', () => {
  test('should generate maps', () => {
    const map = generateMap(5, 5, 'inside');
    console.log(map);
  });
});
