// API Key: http://www.omdbapi.com/?i=tt3896198&apikey=e8773e4
// Data request are to be sent to: 'http://www.omdbapi.com/?apikey=e8773e4&t=Avengers'
// Data Request API Key format : e8773e4 then you put the "&" symbol then the "=" 
// symbol then "the name of the object you are going to be searching for"


const movieListEl = document.querySelector('.movies');
const movieMenuEl = document.querySelector('.movie__menu')

// This is a function for the search bar
async function onSearchChange(event) {
    const movieID = event.target.value
    // console.log(I want the const "movieID" to bring up the movie that is searched for in the search bar)
    
    const movie = localStorage.getItem('movieID')
    const movieItem = await fetch(`http://www.omdbapi.com/?apikey=e8773e4&s=${movieID}`)
    const movieItemData = await movieItem.json();
  
    movieMenuEl.innerHTML = movieItemData.Search.map((search) => movieSearch(search)).join("");
}


function movieSearch(search) {
    return `
    <div class="movie__list">
        <div class="movie">
            <div class="movie__title">
                ${search.Poster}
            </div>
            <p class="movie__body">
                ${search.Title}
            </p>
        </div>
    </div>`
}


// This function translates the API to HTML and puts it on the page
async function getAPI() {
    const getMovies = await fetch('http://www.omdbapi.com/?apikey=e8773e4&s=Avengers')
    const movieData =await getMovies.json();
    movieListEl.innerHTML = movieData.Search.map((movie) =>  movieInfo(movie)).join("")
    // console.log(movieData)
}
getAPI();


// This function operates within the MovieInfo function for the onclick and targets a new page.
function showMovie(imdbID) {
    localStorage.setItem("movieID", imdbID)
    // window.location.href = `${window.location.origin}/movie.html`
    
}


function movieInfo(movie) {
    return `
        <div class="movie__card" onclick="showMovie('${movie.imdbID}')">
            <div class="movie__card--container">
                <p><img src="${movie.Poster}"></p>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
            </div>
        </div>`;
    }

    
    
    