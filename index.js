// API Key: http://www.omdbapi.com/?i=tt3896198&apikey=e8773e4
// Data request are to be sent to: 'http://www.omdbapi.com/?apikey=e8773e4&s=Avengers'
// Data Request API Key format : e8773e4 then you put the "&" symbol then the "=" 
// symbol then "the name of the object you are going to be searching for"



async function getAPI() {
    const getMovies = await fetch('http://www.omdbapi.com/?apikey=e8773e4&s=Avengers')
    const movieData =await getMovies.json();
    const movieListEl = document.querySelector('.movie__list');
    movieListEl.innerHTML = movieData.Search.map((movie) =>  movieInfo(movie)).join("")

}

getAPI();


function showMovieTitle(Year) {
    console.log(Year)
    localStorage.setItem("movie", Year)
    window.location.href = `${window.location.origin}/movie.html`
}
   



function movieInfo(movie) {
    return `
    <div class="movie__card" onclick="showMovieTitle(${movie.Year})">
        <div class="movie__card--container">
            <p><b>Poster:</b><img src="${movie.Poster}"></p>
            <p><b>Title:</b> ${movie.Title}</p>
            <p><b>Year:</b> ${movie.Year}</p>
        </div>
    </div>`;
}

