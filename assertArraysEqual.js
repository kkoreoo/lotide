const eqArrays = function(arr1, arr2) {
  let result = false;
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed ${arr1} !== ${arr2}`)
  }
};

