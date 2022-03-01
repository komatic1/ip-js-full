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
 *     test: null
 * };
 * 
 * delete obj2.test;
 * 
 * for (let key in obj2) {
 *     if (typeof(obj2[key]) === 'object') {
 *         for (let i in obj[key]) {
 *             console.log(obj2[key][i]);
 *         }
 *     } else {
 *         console.log(`Property ${key} is ${obj2[key]}`);
 *     }
 * }
 * 
 * 13:05 in 20
 * 
 */