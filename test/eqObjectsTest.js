const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("returns false when comparing shirtObject = { color: 3, size: 'medium' } and anotherShirtObject = { size: 'medium', color: 4 } ", () => {
    const shirtObject = { color: 3, size: "medium" };
    const anotherShirtObject = { size: "medium", color: 4 };
    assert.strictEqual(eqObjects(shirtObject , anotherShirtObject), false);
  });

  it("returns false when comparing shirtObject = { color: 3, size: 'medium' } and longSleeveShirtObject = { size: 'medium', color: 'red', sleeveLength: 'long' } ", () => {
    const shirtObject = { color: 3, size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.strictEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });

  it("returns true when comparing multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' } and anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] } ", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.strictEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);
  });

  it("returns false when comparing multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' } and longSleeveMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' } ", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.strictEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);
  });

  it("returns true when comparing { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false when comparing { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it("returns true when comparing eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

})
