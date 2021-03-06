'use strict';

var assert = require('chai').assert;
var fill = require('../');
var zeros = require('ndarray-scratch').zeros;
var equal = require('ndarray-tests').equal;
var ndarray = require('ndarray');
var iota = require('iota-array');
var ops = require('ndarray-ops');

describe('ndarray-vector-fill', function () {
  it('1d', function () {
    var A = fill(zeros([3, 2]), function (i) {
      return [i * 2, i * 2 + 1];
    });
    var B = ndarray(iota(6), [3, 2]);
    assert(equal(A, B));
  });

  it('2d', function () {
    var A = fill(zeros([4, 5, 3]), function (i, j) {
      return [i * 3 * 5 + 3 * j, i * 3 * 5 + 1 + 3 * j, i * 3 * 5 + 2 + 3 * j];
    });
    var B = ndarray(iota(60), [4, 5, 3]);
    assert(equal(A, B));
  });

  it('3d', function () {
    var A = fill(zeros([4, 4, 5, 3]), function (i, j, k) {
      return [i * 3 * 5 * 4 + j * 3 * 5 + 3 * k, i * 3 * 5 * 4 + j * 3 * 5 + 1 + 3 * k, i * 3 * 5 * 4 + j * 3 * 5 + 2 + 3 * k];
    });
    var B = ndarray(iota(240), [4, 4, 5, 3]);
    assert(equal(A, B));
  });

  it('0d into 3d', function () {
    var A = fill(zeros([4, 5, 3]), function (i, j) { return []; });
    var B = zeros(A.shape);
    assert(equal(A, B));
  });

  it('1d into 3d', function () {
    var A = fill(zeros([4, 5, 3]), function (i, j) { return [1]; });
    var B = zeros(A.shape);
    ops.assigns(B.pick(null, null, 0), 1);
    assert(equal(A, B));
  });

  it('2d into 3d', function () {
    var A = fill(zeros([4, 5, 3]), function (i, j) { return [1, 2]; });
    var B = zeros(A.shape);
    ops.assigns(B.pick(null, null, 0), 1);
    ops.assigns(B.pick(null, null, 1), 2);
    assert(equal(A, B));
  });
});
