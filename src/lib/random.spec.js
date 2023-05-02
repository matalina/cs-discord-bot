const {getRandomItem, getRandomItems} = require('./random');

describe('random items tests', () => {
  test('should get random item', () => {
    const items = ['one', 'two', 'three'];
    expect(items.includes(getRandomItem(items))).toBe(true);
  });

  test('should get 2 unique random items', () => {
    const items = ['one', 'two', 'three'];
    const randomItems = getRandomItems(items, 2);
    expect(randomItems.length).toBe(2);
    expect(items.includes(randomItems[0])).toBe(true);
    expect(items.includes(randomItems[1])).toBe(true);
    expect(randomItems[0] !== randomItems[1]).toBe(true);
  });
});
