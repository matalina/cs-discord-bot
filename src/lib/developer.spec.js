const {rollDeveloper} = require('./developer');

describe('developer tests', () => {
  test('should get random developer', () => {
    const {dev, roll} = rollDeveloper();
    expect(dev.length > 0).toBe(true);
  });
});
