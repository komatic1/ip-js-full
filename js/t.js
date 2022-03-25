"use strict";

// by value
let a = 5,
    b = a;

b = b + 5;

console.log(a, b);

// by ref
const obj = {
    a: 5,
    b: 1
};

const copy = obj;
copy.a = 10;

console.log(obj, copy);

// variables - by value
// objects - by reference
// make an object copy - by function
function makeCopy(mainObj) { // it's only поверхностная copy of object
    let objCopy = {};
    
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
};

/*
если внутри объекта есть объект, то будет поверхностная копия
но есть еще и глубокая копия - надо проверить, что элемент объекта не является сам объектом
*/
const numbers = {a:3, b:4};
const add = {f:10, s:13};
console.log(Object.assign(numbers, add));
// spread
