//https://www.omdbapi.com/?i=tt3896198&apikey=1e94ff26&s=naruto
//

const form = document.querySelector('form');
const movieListEl = document.querySelector('.movies__list');

//GETS TEXT INSIDE THE INPUT
form.addEventListener('submit', (e)=> {
    e.preventDefault(); //prevents opening new tab
    let query = form.querySelector('input').value;
    getMovies(query);
})

async function getMovies(query) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1e94ff26&s=${query}`)
    const movieData = await movies.json();
    
    console.log(movieData)

    movieListEl.innerHTML = movieData.Search.map((movie) => 
        `<div class="movie click" onclick="showMovieData(${movie.imdbID})">
            <a class="movie-card__container click"
                ><img
                class="movie__poster"
                src="${movie.Poster}"
                alt=""
            ></a>
            <h3><b>${movie.Title}</b></h3>
            <p>${movie.Year}</p>
        </div>`
    ).join('');
}

function showMovieData(id) {
    localStorage.setItem("id", imdbID)
    window.location.href = `${window.location.origin}/movie.html`
    console.log(id)
}