const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  for (const key in object1) {
    let objOneValues = object1[key];
    let objTwoValues = object2[key];

    // if the value is an array
    if (Array.isArray(objOneValues) && Array.isArray(objTwoValues)) {
    // if the value is an object
    } else if (typeof(objOneValues) === "object" && typeof(objTwoValues) === "object") {
      // assessing to see if the objects have the same # of properties
      if (Object.keys(objOneValues).length !== Object.keys(objTwoValues).length) {
        return false;
      }

      eqObjects(objOneValues, objTwoValues);

    } else if (!eqArrays(objOneValues, objTwoValues)) {
        return false;

    } else if (objOneValues !== objTwoValues) {
      return false;

    }
  }
  return true;
};

module.exports = eqObjects;