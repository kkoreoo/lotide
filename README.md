# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kkoreoo/lotide`

**Require it:**

`const _ = require('@kkoreoo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `.head(arr)`: will return the first element of an array
* `.tail(arr)`: will return a new array without the first element of the inputted array 
* `.middle(arr)`: will return the middle index of an array
* `.assertEqual(actual, expected)`: will compare two inputs and return true if actual output matches the expected output and false when they're not
* `.assertArraysEqual(actual, expected)`: will compare two arrays and return true if they're equal, false if they're not
* `.assertObjectsEqual(actual, expected)`: will compare two objects and return true if they're, false if they're not
* `.countLetters(string)`: will return an object with the number of each letter a string has
* `.countOnly(arr, object)`: will take an arr and based off the inputted object will return an object of items sought out in the array. 
* `.eqArrays(arr1, arr2)`: description
* `.eqObjects(obj1, obj2)`: will return the first element of an array
* `.findKey(obj, callbackFn)`: will return the first key that contains the value sought out by the callbackFn.
* `.findKeyByValue(obj, value)`: will return the first key taht contains the value
* `.flatten(arr)`: will flatten out a nested array by 1
* `.letterPositions(string)`: will find all the indexes of a specific letter in the inputted string.
* `.map(arr, callbackFn)`: will return a new array based off the results of the callback function
* `.takeUntil(arr, callbackFn)`: will return a slice of the original array until the callback function returns truthy
* `.without(source, itemToRemove)`: will remove the specified items from the source array.