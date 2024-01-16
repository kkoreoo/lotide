const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    console.log('hello');
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (arr1[i].length !== arr2[i].length) {
        return false;
      }
      
      eqArrays(arr1[i], arr2[i]);

    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
