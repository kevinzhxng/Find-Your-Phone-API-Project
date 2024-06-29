//https://www.omdbapi.com/?i=tt3896198&apikey=1e94ff26&s=naruto
//https://www.omdbapi.com/?i=tt0988824&apikey=1e94ff26&type

const form = document.querySelector('form');
const movieListEl = document.querySelector('.movies__list');
let movieData = {};
let query = "";

form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents opening new tab
    query = form.querySelector('input').value;
    getMovies(query);
})

//my filter function
function filterMovies(event) {
    sortMovies(event.target.value) //ONLY JOB IS TO SEND TO SORT FUNCTION
}

async function sortMovies(filter) {
    if (filter === "Latest-Movies") {
        movieData.Search.sort((a, b) => parseInt(b.Year.substring(0, 4)) - parseInt(a.Year.substring(0, 4)));
    } else if (filter === "Oldest-Movies") {
        movieData.Search.sort((a, b) => parseInt(a.Year.substring(0, 4)) - parseInt(b.Year.substring(0, 4)));
    }

    movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("");


}



async function getMovies() {
    const movies = await fetch
        (`https://www.omdbapi.com/?i=tt3896198&apikey=1e94ff26&s=${query}`);
    movieData = await movies.json();

    console.log(movieData)

    movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)
    ).join('');
}

function movieHTML(movie) {
    return `<div class="movie"">
            <a class="movie-card__container"
                ><img
                class="movie__poster"
                src="${movie.Poster}"
                alt=""
            ></a>
            <h3><b>${movie.Title}</b></h3>
            <p>${movie.Year}</p>
        </div>`;
}

