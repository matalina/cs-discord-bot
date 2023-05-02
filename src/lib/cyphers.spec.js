const {getRandomCypher, getRandomCyphers, printCypher} = require('./cyphers');

describe('Cypher tests', () => {
  test('should get random cypher', () => {
    const cypher = getRandomCypher();
    expect(typeof cypher.name).toBe('string');
  });

  test('should get 3 random cypher', () => {
    const cyphers = getRandomCyphers();
    expect(cyphers.length).toBe(3);
  });

  test('should get 5 random cypher', () => {
    const cyphers = getRandomCyphers(5);
    expect(cyphers.length).toBe(5);
  });

  test('should print a cypher', () => {
    const cypher = getRandomCypher();
    const output = printCypher(cypher);
    expect(typeof output).toBe('string');
  });
});
