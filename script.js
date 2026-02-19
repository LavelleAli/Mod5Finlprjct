// API Key: http://www.omdbapi.com/?i=tt3896198&apikey=e8773e4
// Data request are to be sent to: 'http://www.omdbapi.com/?apikey=e8773e4&t=Avengers'
// Data Request API Key format : e8773e4 then you put the "&" symbol then the "=" 
// symbol then "the name of the object you are going to be searching for"


const movieListEl = document.querySelector('.movies');



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
    localStorage.setItem("movieTag", imdbID)
    window.location.href = `${window.location.origin}/movie.html`
    
}


function movieInfo(movie) {
    return `
        <div class="movie__card" onclick="showMovie('${movie.imdbID}')">
            <div class="movie__card--container">
                <p class=" movie__card--poster"><img src="${movie.Poster}"></p>
                <p><b>${movie.Title}</b></p>
                <p><b>${movie.Year}</b></p>
            </div>
        </div>`
        
    }



// Moving Background
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i ) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}