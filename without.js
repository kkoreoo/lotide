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
  let updatedArr = source;
  for (let i = 0; i < source.length; i++) {
    if (source.includes(itemsToRemove[i], 0)) {
      let index = source.indexOf(itemsToRemove[i]);
      updatedArr.splice(index, 1);
    } else {
      // do nothing;
    }
  }
  return updatedArr;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], ["3", 2, "4"]));
console.log(without(["1", "2", "3"], [1, 2, "3"])); // ['1', '2']
console.log(without([1, 2, 3], [1, 3])); // [2]
console.log(without(["1", true, "3"], [1, true, "3"])); // ['1]
console.log(without([], [])); // []

assertArraysEqual([1, 2, 3], [1]);
assertArraysEqual(["1", "2", "3"], ["3", 2, "4"]);
assertArraysEqual(["1", "2", "3"], [1, 2, "3"]); // ['1', '2']
assertArraysEqual([1, 2, 3], [1, 3]); // [2]
assertArraysEqual(["1", true, "3"], [1, true, "3"]); // ['1]
assertArraysEqual([], []); // []

