const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertArraysEqual(eqArrays([], []), true);
assertArraysEqual(eqArrays([1, "hello"], [1, "hello"]), true);