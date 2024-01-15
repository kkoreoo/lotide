let tails = [];
const tail = function(arr) {
  tails = arr.slice(1);
  return tails;
};

module.exports = tail;

