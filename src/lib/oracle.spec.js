const {getAnswer} = require('./oracle');

describe('oracle tests', () => {
  test('should return an answer', () => {
    const {answer, roll, keywords} = getAnswer();
    expect(
      answer.includes('Yes') ||
        answer.includes('No') ||
        answer.includes('Maybe')
    ).toBe(true);
    if (answer.includes('and') || answer.includes('but')) {
      expect(keywords.length).toBe(3);
    } else {
      expect(keywords.length).toBe(0);
    }
  });
});
