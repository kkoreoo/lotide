const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tails = [];
const tail = function(arr) {
  tails = arr.slice(1);
  return tails;
};

// test case
const arr = ["Hello", "World", "Lighthouse", "Labs"];
tail(arr);
assertEqual(tails[0], "World");
assertEqual(tails[2], "Labs");

// test case, arr with one element
const arrOne = ["Hello"];
tail(arrOne);
assertEqual(tails[0],);

// test case, empty arr
const arrEmpty = [];
tail(arrEmpty);
assertEqual(tails[0],);