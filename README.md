# ndarray-vector-fill

> Fill an ndarray with component-wise vectors

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![Dependency Status][david-dm-image]][david-dm-url]
[![Semistandard Style][semistandard-image]][semistandard-url]


## Introduction

This module is very similar to [`ndarray-fill`](https://github.com/scijs/ndarray-fill), except it fills an ndarray with vectors. This is useful when you have a function that computes, for example, all three components of a vector at the same time. Using `ndarray-fill`, you'd have to compute the function three times over and throw out most of the results.


## Installation

```bash
$ npm i ndarray-vector-fill
```

## Example

```javascript
var fill = require('ndarray-vector-fill');
var pool = require('ndarray-scratch');
var show = require('ndarray-show');

var A = fill(pool.zeros([3, 3, 2], function (i, j) {
  return [i, 5 + j];
});

console.log(show(A));
// => 
//   0.000    5.000
//   0.000    6.000
//   0.000    7.000
//
//   1.000    5.000
//   1.000    6.000
//   1.000    7.000
//
//   2.000    5.000
//   2.000    6.000
//   2.000    7.000
```

## Usage

#### `require('ndarray-vector-fill')(array, func)`

Iterates over the first `n - 1` dimensions of `array`, filling the remaining dimensions with the components of `func`.

- `array` is an ndarray which will be initialized
- `func` is a function of `n - 1` arguments that receives the corresponding indices of the first `n - 1` dimensions of `array`. It should return an array with length matching the last dimension of `array`.

**Returns** An initialized array

## See Also

- [`ndarray-fill`](https://github.com/scijs/ndarray-fill)

## License

&copy; 2016 Ricky Reusser. MIT License.




<!-- BADGES -->

[travis-image]: https://travis-ci.org/scijs/ndarray-vector-fill.svg?branch=master
[travis-url]: https://travis-ci.org/scijs/ndarray-vector-fill

[npm-image]: https://badge.fury.io/js/ndarray-vector-fill.svg
[npm-url]: https://npmjs.org/package/ndarray-vector-fill

[david-dm-image]: https://david-dm.org/scijs/ndarray-vector-fill.svg?theme=shields.io
[david-dm-url]: https://david-dm.org/scijs/ndarray-vector-fill

[semistandard-image]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
[semistandard-url]: https://github.com/Flet/semistandard

<!-- see stability badges at: https://github.com/badges/stability-badges -->
[stability-url]: https://github.com/badges/stability-badges
[stability-deprecated]: http://badges.github.io/stability-badges/dist/deprecated.svg
[stability-experimental]: http://badges.github.io/stability-badges/dist/experimental.svg
[stability-unstable]: http://badges.github.io/stability-badges/dist/unstable.svg
[stability-stable]: http://badges.github.io/stability-badges/dist/stable.svg
[stability-frozen]: http://badges.github.io/stability-badges/dist/frozen.svg
[stability-locked]: http://badges.github.io/stability-badges/dist/locked.svg

