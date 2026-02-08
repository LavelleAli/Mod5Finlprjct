// API Key: http://www.omdbapi.com/?i=tt3896198&apikey=e8773e4
// Data request are to be sent to: http://www.omdbapi.com/?apikey=[yourkey]&
// Data Request API Key format : e8773e4 then you put the "&" symbol then the "=" symbol then "fast"



async function getAPI() {
    const movie = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e8773e4');
    const movieData = await movie.json();
    console.log(movieData)
    movieData.map()

    
}

getAPI()


