"use strict";

const numberOfFilms = +prompt('How many movies you saw list time?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('One of the last movie?', ''),
        b = prompt('Rate it:', '');
        
    if (a != null && b != null  && a != '' && b != '' && a.length < 3) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('so small quantity');
} else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
    console.log('good!');
} else {
    console.log('perfect!!');
}

console.log(personalMovieDB);

/**
 * 
 * function showFirstMessage() {
 *     console.log('Hello world!');
 * }
 * 
 * showFirstMessage();
 */