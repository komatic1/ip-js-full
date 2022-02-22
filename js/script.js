"use strict";

let numberOfFilms = +prompt('How many movies you saw?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('One of the last movie?', ''),
    b = prompt('Rate it:', ''),
    c = prompt('One of the last movie?', ''),
    d = prompt('Rate it:', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);