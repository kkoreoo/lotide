const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns 1 for the index of 'e' in 'hello'", () => {
    assert.equal(Object.values(letterPositions("hello").e), 1);
  });

  it("returns 3, 5, 15, 18 for the letter position of 'h' in 'lighthouse in the house'", () => {
    let resultArr = [];
    for(let value in letterPositions("lighthouse in the house").h) {
      resultArr.push(letterPositions("lighthouse in the house").h[value]);
      console.log(resultArr);
    }
    resultArr = resultArr.join (', '); 
    assert.equal(resultArr, "3, 5, 15, 18");
  });

  it("returns 9, 16 ,22 for the letter position of 'e' in 'lighthouse in the house'", () => {
    let resultArr = [];
    for(let value in letterPositions("lighthouse in the house").e) {
      resultArr.push(letterPositions("lighthouse in the house").e[value]);
      console.log(resultArr);
    }
    resultArr = resultArr.join (', '); 
    assert.equal(resultArr, "9, 16, 22");
  });
})