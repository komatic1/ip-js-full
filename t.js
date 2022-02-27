"use strict";


function first() {
    //do some
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function ls(lang, callback) {
    console.log(`Learn ${lang}`);
    callback();
}

ls('JS', function() {
    console.log('pass the lesson');
});

function done() {
    console.log('v2');
}

ls('PHP', done);







// console.dir() - information about element 
// console.log(Number);

/**
 * 
 * string.toUpperCase()
 * stirng.toLowerCase()
 * 
 * string.indexOf('tr') = index from 0 OR -1 if not found
 * 
 * string = 'hello world'
 * string.slice(6, [string.length()]) - second parameter non-required
 * 
 * string.substring(6, 11) - diff from .slice() parameters CAN'T be negative
 * string.substr(6, 5) - second parameter is QUANTITY of symbols to cut
 * 
 */

/**
 * Math.
 * 
 * num = 12.2;
 * Math.round(num) = 12
 * 
 * test = "12.2px";
 * parseInt(test) = 12
 * parseFloat(test) = 12.2
 * 
 */