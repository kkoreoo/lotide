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
  let updatedArr = source.slice();
  for (let i = 0; i < source.length; i++) {
    if (updatedArr.includes(itemsToRemove[i], 0)) {
      let index = updatedArr.indexOf(itemsToRemove[i]);
      updatedArr.splice(index, 1);
    } else {
      // do nothing;
    }
  }
  return updatedArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // [2, 3]
assertArraysEqual(without(["1", "2", "3"], ["3", 2, "4"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']); // ['1', '2']
assertArraysEqual(without([1, 2, 3], [1, 3]), [2]); // [2]
assertArraysEqual(without(["1", true, "3"], [1, true, "3"]), ["1"]); // ['1]
assertArraysEqual(without([], []), []); // []



