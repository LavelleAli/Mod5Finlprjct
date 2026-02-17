const movieMenuEl = document.querySelector('.movie__menu');

// This is a function for the search bar
async function onSearchChange(event) {
    const movieID = event.target.value
    // console.log(I want the const "movieID" to bring up the moive that is searched for in the search bar)
    
    const movie = localStorage.getItem('movieID')
    const movieItem = await fetch(`http://www.omdbapi.com/?apikey=e8773e4&s=${movieID}`)
    const movieItemData = await movieItem.json();

    movieMenuEl.innerHTML = movieItemData.Search.map(shows => `
        <div class="movie__list">
            <div class="movie">
                <div class="movie__title">
                    ${movie.Poster}
                </div>
                <p class="movie__body">
                    ${movie.Title}
                </p>
            </div>
        </div>`)
}

async function movieSearch() {
    const movie = localStorage.getItem('movieID')
    const movieItem = await fetch(`http://www.omdbapi.com/?apikey=e8773e4&s=${movie}`)
    const movieItemData = await movieItem.json();

    movieMenuEl.innerHTML = movieItemData.Search.map(shows => `
        <div class="movie__list">
      <div class="movie">
          <div class="movie__title">
             ${movie.Poster}
          </div>
          <p class="movie__body">
              ${movie.Title}
          </p>
      </div>
    </div>
    `).join('');
}