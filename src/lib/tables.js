const {DiceRoll} = require('@dice-roller/rpg-dice-roller');

function rollOnTable(formula, table) {
  const roll = new DiceRoll(formula);
  const total = roll.total;
  let description = '';

  for (let i in table) {
    const row = table[i];
    if (row.min === null && total <= row.max)
      description = row.description.toString();
    else if (row.max === null && total >= row.min)
      description = row.description.toString();
    else if (total >= row.min && total <= row.max)
      description = row.description.toString();
  }

  return {description, roll};
}

module.exports = {
  rollOnTable,
};
