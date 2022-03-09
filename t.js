"use strict";

/**
 * \
 */

const arr = [1, 2, 3, 6, 8];
/**
arr.pop();

console.log(arr);

arr.push(13);
console.log(arr);

 * shif & unshift - not convenient because of array index
 
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/
for (let value of arr) {
    console.log(value);
}
// length = last index + 1
const a = [2, 3, 4, 7];
/*
a[99] = 0;
console.log(a.length);
console.log(a);
*/
// result
// 100
// [ 2, 3, 4, 7, <95 empty items>, 0 ]
//
a.forEach(function (item, index, a) {
    console.log(`${index}: ${item} inside ${a}`);
});