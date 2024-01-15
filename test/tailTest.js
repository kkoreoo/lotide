const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns 'World' as the first index and 'Labs' as the last index for ['Hello', 'World', 'Lighthouse', 'Labs']", () => {
    const arr = ["Hello", "World", "Lighthouse", "Labs"];
    let result = tail(arr);
    assert.strictEqual(result[0], "World");
    assert.strictEqual(result[2], "Labs");
  });

  it("returns undefined for ['Hello']", () => {
    const arrOne = ["Hello"];
    let result = tail(arrOne);
    assert.strictEqual(result[0], undefined);
  });

  it("returns undefined for []", () => {
    const arrEmpty = [];
    let result = tail(arrEmpty);
    assert.strictEqual(result[0], undefined);
  });
})
