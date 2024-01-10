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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  let updatedArr = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] === itemsToRemove[i]) {
      // do nothing
    } else {
      updatedArr.push(source[i]);
    }
  }
  return updatedArr;
};

console.log(without([1, 2, 3], [1])); 
console.log(without(["1", "2", "3"], [1, 2, "3"])); 
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1])); 
console.log(without(["1", true, "3"], [1, true, "3"]));
console.log(without([], [])); 


