const {
  getRandomCypher,
  getRandomCyphers,
  printCypher,
  getAndPrintRandomCyphers,
} = require('./cyphers');

describe('Cypher tests', () => {
  test('should get random cypher', () => {
    const cypher = getRandomCypher();
    expect(typeof cypher.name).toBe('string');
  });

  test('should get a random subtle cypher', () => {
    const cypher = getRandomCypher('subtle');
    expect(typeof cypher.name).toBe('string');
  });

  test('should get a random manifest cypher', () => {
    const cypher = getRandomCypher('manifest');
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

  test('should get and print random cyphers', () => {
    const output = getAndPrintRandomCyphers();
    expect(typeof output).toBe('string');
  });

  test('should get and print random subtle cyphers', () => {
    const output = getAndPrintRandomCyphers('subtle');
    expect(typeof output).toBe('string');
  });

  test('should get and print random manifest cyphers', () => {
    const output = getAndPrintRandomCyphers('manifest');
    expect(typeof output).toBe('string');
  });
});
