"use strict";

// in the for ... of we can use 'break' and 'continue'; into .forEach - NOT!
/*
const str = prompt('', '');
const products = str.split(', ');
console.log(products);
products.sort();
console.log(products.join('; '));
*/
const arr = [2, 13, 26, 8, 10];
arr.sort();
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.sort(compareNum);
console.log(arr);

// pseudoarrays
/**
 * when we work with DOM elements - it's pseudoarrays
 * 
 * pseudoarray DOESN"T have any arrays methods just the structure is similar
 * 
 */

