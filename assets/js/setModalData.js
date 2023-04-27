import { editMovie } from "./editMovie.js"
import { getDataByID } from "./getDataFromAPI.js"
import { removeMovie } from "./removeMovie.js"

const editButton = document.getElementById('editButton')
const removeButton = document.getElementById('removeButton')

export const setModalData = (movie = {}) => {
    const movieName = document.getElementById('movie-name')
    const movieVideo = document.getElementById('movie-video')
    const movieCountry = document.getElementById('movie-country')
    const movieSynopsis = document.getElementById('movie-synopsis')
    const movieCast = document.getElementById('movie-cast')
    const movieDirection = document.getElementById('movie-direction')
    const movieRelease = document.getElementById('movie-release')
    const movieGenres = document.getElementById('movie-genres')

    movieVideo.setAttribute('src', `https://www.youtube.com/embed/${movie.video}`)
    movieName.textContent = movie.nombre
    movieCountry.textContent = movie.pais
    movieSynopsis.textContent = movie.sinopsis
    movieCast.textContent = movie.reparto
    movieDirection.textContent = movie.direccion
    movieRelease.textContent = movie.year
    movieGenres.textContent = movie['generos'].toString().replaceAll(',', ', ')


    editButton.value = movie._id
    removeButton.value = movie._id
}


editButton.addEventListener('click', editMovie)
removeButton.addEventListener('click', removeMovie)


const carouselItems = document.querySelectorAll('.carousel-item')
carouselItems.forEach(item => {
    item.addEventListener('click', async () => {
        const carouselItemData = await getDataByID(item.dataset.id)
        setModalData(carouselItemData)
    })
})

