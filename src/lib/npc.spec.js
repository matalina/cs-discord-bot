const {generateNpc} = require('./npc');

describe('npc and chreature tests', () => {
  test('should get random npc', () => {
    const npc = generateNpc();
    expect(npc.length > 0).toBe(true);
  });
});
