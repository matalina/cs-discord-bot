const {getRandomWord, getRandomKeywords, keywords} = require('./keywords');

describe('random keyword tests', () => {
  test('should get random word', () => {
    expect(keywords.includes(getRandomWord())).toBe(true);
  });

  test('should get 3 unique random items', () => {
    const randomItems = getRandomKeywords();
    expect(randomItems.length).toBe(3);
    expect(keywords.includes(randomItems[0])).toBe(true);
    expect(keywords.includes(randomItems[1])).toBe(true);
    expect(keywords.includes(randomItems[2])).toBe(true);
    expect(randomItems[0] !== randomItems[1]).toBe(true);
    expect(randomItems[1] !== randomItems[2]).toBe(true);
    expect(randomItems[0] !== randomItems[2]).toBe(true);
  });

  test('should get 5 unique random items', () => {
    const randomItems = getRandomKeywords(5);
    expect(randomItems.length).toBe(5);
    expect(keywords.includes(randomItems[0])).toBe(true);
    expect(keywords.includes(randomItems[1])).toBe(true);
    expect(keywords.includes(randomItems[2])).toBe(true);
    expect(keywords.includes(randomItems[3])).toBe(true);
    expect(keywords.includes(randomItems[4])).toBe(true);
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (i != j) {
          expect(randomItems[i] !== randomItems[j]).toBe(true);
        }
      }
    }
  });
});
