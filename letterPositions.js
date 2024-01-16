const letterPositions = function(sentence) {
  const results = {};
  for (const index in sentence) {
    let key = sentence[index];
    if (key === " ") {
      // do nothing
    } else if (results[key]) {
      results[key].push(Number(index));
    } else {
      results[key] = [];
      results[key].push(Number(index));
    }
  }
  return results;
};

module.exports = letterPositions;
