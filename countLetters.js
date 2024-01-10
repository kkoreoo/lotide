const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sent) {
  const noSpace = sent.split(' ').join('');
  const letters = {};

  for (letter of noSpace){
    if (letters[letter]){
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
};

console.log(countLetters("hello world"));