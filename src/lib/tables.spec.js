const {rollOnTable} = require('./tables');

describe('random table test', () => {
  test('should get a random item on given table', () => {
    const formula = '1d8';
    const table = [
      {min: 1, max: 1, description: 'Purple (high magic/high tech)'},
      {min: 2, max: 2, description: 'Magenta (high magic/no tech)'},
      {min: 3, max: 3, description: 'Red (high magic, low tech)'},
      {min: 4, max: 4, description: 'Orange (no magic, low tech)'},
      {min: 5, max: 5, description: 'Yellow (low magic, low tech)'},
      {min: 6, max: 6, description: 'Green (no magic, no tech)'},
      {min: 7, max: 7, description: 'Cyan (low magic, high tech)'},
      {min: 8, max: 8, description: 'Blue (no magic, high tech)'},
    ];
    const answers = table.map((t) => t.description);
    const {description} = rollOnTable(formula, table);
    expect(answers.includes(description)).toBe(true);
  });
});
