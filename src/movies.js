// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director);
        return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaSpielbergMovies = moviesArray.filter(oneMovie => (oneMovie.director === "Steven Spielberg" && oneMovie.genre.includes("Drama")));
    return dramaSpielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const onlyScoresArray = moviesArray.map(movie => movie.score)
    //console.log(onlyScoresArray)
    const filteredScores = onlyScoresArray.filter(element => (element !== undefined))
    //console.log(filteredScores)
    const sumScores = filteredScores.reduce((previousValue, currentValue) => previousValue + currentValue);
    const avScore = Math.round((sumScores / moviesArray.length) * 100) /100
    return avScore
}

    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const onlyDrama = moviesArray.filter(oneMovie => (oneMovie.genre.includes("Drama")));
    if (onlyDrama.length === 0) {
        return 0;
    }
    //console.log(onlyDrama)
    const onlyDramaScores = onlyDrama.map(movie => movie.score)
    const sumScores = onlyDramaScores.reduce((previousValue, currentValue) => previousValue + currentValue);
    const avScore = Math.round((sumScores / onlyDrama.length) * 100) /100
    return avScore

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArray2 = structuredClone(moviesArray);
    const sortedArr2 = moviesArray2.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year;
        } 
    })
    console.log(sortedArr2)
    return sortedArr2;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const onlyTitles = moviesArray.map(movie => movie.title)
    console.log(onlyTitles)
    const onlyTitlesCopy = structuredClone(onlyTitles)
    const orderedByTitle = onlyTitlesCopy.sort((a, b) => a.title > b.title);
    //console.log(orderedByTitle)
    const first20Titles = orderedByTitle.splice(0, 20)
    //console.log(first20Titles)
    return first20Titles

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
