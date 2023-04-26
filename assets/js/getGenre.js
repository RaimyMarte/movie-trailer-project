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
genreText.textContent= `¡Bienvenido a la página de ${savedGenre} en TrailerFlix! Aquí encontrarás una cuidada selección de tráileres de algunas de las mejores películas del género ${savedGenre}. Ya sea que sea un fanático acérrimo de ${savedGenre} o simplemente esté buscando algo nuevo para ver, lo tenemos cubierto.`
const movies = await getDataByGenre(savedGenre)
movies.forEach(movie => createMoviesContainer(movie));