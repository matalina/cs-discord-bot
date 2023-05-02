function getRandomItems(items, count) {
  const words = [];
  for (let i = 0; i < count; i++) {
    let word = getRandomItem(items);
    while (words.includes(word)) {
      word = getRandomItem(items);
    }
    words.push(word);
  }
  return words;
}

function getRandomItem(items) {
  const index = Math.floor(Math.random() * items.length) % items.length;
  return items[index];
}

module.exports = {
  getRandomItem,
  getRandomItems,
};
