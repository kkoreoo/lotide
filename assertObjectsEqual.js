const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    let objOneValues = object1[key];
    let objTwoValues = object2[key];
    if (Array.isArray(objOneValues) && Array.isArray(objTwoValues)) {
      if (!eqArrays(objOneValues, objTwoValues)) {
        return false;
      }
    } else if (objOneValues !== objTwoValues) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
 } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

console.log(assertObjectsEqual( { a: '1', b: 2 }, { b: 2, a: '1' }));