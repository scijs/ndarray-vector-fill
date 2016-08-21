var fill = require('../');
var pool = require('ndarray-scratch');
var show = require('ndarray-show');

var A = fill(pool.zeros([3, 3, 2]), function (i, j) {
  return [i, 5 + j];
});

console.log(show(A));
