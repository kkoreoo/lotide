const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) {
    result = false;
    return result;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
      return result;
    } 
  }
  return result;
};

const assertEqualArrays = function(eqArrays) {
 if (eqArrays === true) {
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
 } else {
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
 }
};
