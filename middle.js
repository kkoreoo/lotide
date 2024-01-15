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

module.exports = middle;

