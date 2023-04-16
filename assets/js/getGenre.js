import { createMoviesContainer, deleteAllMoviesContainer } from "./createMovies.js";
import { getDataByGenre } from "./getDataFromAPI.js";

const genres = document.querySelectorAll('a[href="gallery.html"]')
const genreTitle = document.getElementById('genreTitle')
const genreText = document.getElementById('genreText')

genres.forEach((genre => {
    genre.addEventListener('click', async (event) => {
        sessionStorage.setItem('genre', JSON.stringify(genre.textContent))
    })
}))

deleteAllMoviesContainer()

const savedGenre = JSON.parse(sessionStorage.getItem('genre'))

genreTitle.textContent= savedGenre
genreText.textContent= `Welcome to the ${savedGenre} page on TrailerFlix! Here, you'll find a curated selection of trailers for some of the best movies in the ${savedGenre} genre. Whether you're a die-hard fan of ${savedGenre} or just looking for something new to watch, we've got you covered.`
const movies = await getDataByGenre(savedGenre)
movies.forEach(movie => createMoviesContainer(movie));