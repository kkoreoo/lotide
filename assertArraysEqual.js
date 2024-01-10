const eqArrays = function(arr1, arr2) {
  let result = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      result = false;
      return result;
    } else {
      result = true;
    }
  }
  return result;
};

const assertEqualArrays = function(eqArrays) {
 if (eqArrays === true) {
  console.log("✅✅✅ Assertion Passed");
 } else {
  console.log("🛑🛑🛑 Assertion Failed");
 }
};
