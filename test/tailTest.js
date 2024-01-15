const tail = require('../tail');
const assertEqual = require('../assertEqual');

const arr = ["Hello", "World", "Lighthouse", "Labs"];
tail(arr);
assertEqual(tail(arr)[0], "World");
assertEqual(tail(arr)[2], "Labs");

const arrOne = ["Hello"];
tail(arrOne);
assertEqual(tail(arrOne)[0],);

const arrEmpty = [];
tail(arrEmpty);
assertEqual(tail(arrEmpty)[0],);