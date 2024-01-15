const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  
  it("returns 2 for [1, 2, 3]", () => {
    let arr = [1, 2, 3];
    let result = middle(arr);
    assert.strictEqual(result[0], 2);
  });

  it("returns undefined for [1]", () => {
    let arr = [1];
    let result = middle(arr);
    assert.strictEqual(result[0], undefined);
  });

  it("returns undefined for [1, 2]", () => {
    let arr = [1, 2];
    let result = middle(arr);
    assert.strictEqual(result[0], undefined);
  });

  it("returns 2, 3 for [1, 2, 3, 4]", () => {
    let arr = [1, 2, 3, 4];
    let result = middle(arr);
    assert.strictEqual((result[0], result[1]), (2, 3));
  });

  it("returns 4 for [1, 2, 3, 4, 5, 6, 7]", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let result = middle(arr);
    assert.strictEqual(result[0], 4);
  });
})
