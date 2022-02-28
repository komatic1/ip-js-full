"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many movies you saw list time?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many movies you saw list time?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("One of the last movie?", ""),
      b = prompt("Rate it:", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 3) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("so small quantity");
  } else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
    console.log("good!");
  } else {
    console.log("perfect!!");
  }
}

detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite genre has number ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
