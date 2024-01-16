const assert = require('chai').assert;
const flatten = require('../flatten');
const eqArrays = require('../eqArrays');

describe('#flatten', () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3 , 4], 5, [6]]", () => {
    assert.strictEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true); 
  })
})