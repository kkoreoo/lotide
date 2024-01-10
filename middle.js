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
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  let midArr = [];
  let midIndex = Math.ceil(arr.length / 2) - 1;
  if (arr.length === 1 || arr.length === 2) { // need solutions for if 1/2 elements = empty arr, odd = midd element, even = 2 elements returned
    return midArr;
  } else if (arr.length % 2 !== 0) {
    midArr.push(arr[midIndex]);
    return midArr;
  } else {
    midArr.push(arr[midIndex]);
    midArr.push(arr[midIndex + 1]);
    return midArr;
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2,]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);