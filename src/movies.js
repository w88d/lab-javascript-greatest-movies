// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//const movies = require("./data");
//console.log(movies);

function getAllDirectors(moviesArray) { 
    const directorsArray = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDrama = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.toString().includes("Drama"));
     return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length == 0)
         return 0;
     const sum = moviesArray.reduce((acc, currValue) => {
         if(typeof currValue.score === "number"){
             return acc + currValue.score;
         }
         return acc;
       }, 0);

     let avg = (sum / moviesArray.length);
     avg = parseFloat(avg.toFixed(2));

     return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.toString().includes("Drama"));
     if(dramaMovies.length == 0)
         return 0;

     const sum = dramaMovies.reduce((accum, currValue) => {
         if(typeof currValue.score === "number"){
             return accum + currValue.score;
         }
         return accum;
       }, 0);

     let avg = (sum / dramaMovies.length);
     avg = parseFloat(avg.toFixed(2));

     return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a,b) =>{ 
        if(a.year - b.year === 0){
           return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    sortedMovies = [...moviesArray].sort((a,b)=> a.title.localeCompare(b.title)).map((obj)=>obj.title).slice(0,20);
    return sortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { // Create a new array to store the modified movie objects
    const moviesDurationMins = moviesArray.map(eachMovie => {
        const onlyDigits = eachMovie.duration.replace("h", "").replace("min", "").split(" ")
        let minutes = 0
        if (onlyDigits.length <= 1) {
            minutes = onlyDigits[0] * 60
        } else {
            minutes = onlyDigits.reduce((acc, time) => {
                return parseInt(acc) * 60 + parseInt(time)
            })
        }
        return {
            ...eachMovie,
            duration: minutes
        }

    })
    return moviesDurationMins
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

    const years = {};
    moviesArray.forEach(movie => {
        const year = movie.year;
        const score = movie.score;

        if (!years[year]) {
            years[year] = { totalScore: 0, movieCount: 0 };
        }

        years[year].totalScore += score;
        years[year].movieCount++;
    });

    let bestYear = 0;
    let bestAverageScore = 0;

    for (const year in years) {
        const averageScore = years[year].totalScore / years[year].movieCount;

        if (averageScore > bestAverageScore || (averageScore === bestAverageScore && year < bestYear)) {
            bestYear = year;
            bestAverageScore = averageScore;
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAverageScore}`;
}
