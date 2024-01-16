const eqArrays = function(arr1, arr2) {
  let result = true; 
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {   
      result = eqArrays(arr1[i], arr2[i]);
      if (result === false) {
        return false;
      }

    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return result;
};

module.exports = eqArrays;
