"use strict";

/**
 * 
 * object into JavaScript - it's associative an array
 * 
 * const obj = new Object();
 * or
 * const obj2 = {
 *     name: 'test',
 *     age: 40,
 *     skills: {
 *         programming: 'PHP, JavaSript, SQL, SIEMENS',
 *         sport: 'Billiard'
 *     },
 *     test: null,
 *     makeTest: function() {
 *         console.log('TEST');
 *     }
 * };
 * 
 * obj2.makeTest();
 * 
 * delete obj2.test;
 * 
 * let counter = 0;
 * for (let key in obj2) {
 *     if (typeof(obj2[key]) === 'object') {
 *         for (let i in obj[key]) {
 *             console.log(obj2[key][i]);
 *             counter++;
 *         }
 *     } else {
 *         console.log(`Property ${key} is ${obj2[key]}`);
 *         counter++;
 *     }
 * }
 * 
 * now counter - is our length
 * object DOESN"T have length property
 * 
 * 
 * 
 * --------------------
 * console.log(Object.keys(obj2).length);
 * 
 * 
 * --------------------
 * objects descruction
 * const {programming, sport} = obj2.skills;
 * 
 */