import { editMovie } from "./editMovie.js"
import { getDataByID } from "./getDataFromAPI.js"

const editButton = document.getElementById('editButton')
const removeButton = document.getElementById('removeButton')

export const setModalData = (movie = {}) => {
    const movieName = document.getElementById('movie-name')
    const movieVideo = document.getElementById('movie-video')
    const movieSynopsis = document.getElementById('movie-synopsis')
    const movieCast = document.getElementById('movie-cast')
    const movieDirection = document.getElementById('movie-direction')
    const movieRelease = document.getElementById('movie-release')
    const movieGenres = document.getElementById('movie-genres')

    movieVideo.setAttribute('src', `https://www.youtube.com/embed/${movie.video}`)
    movieName.textContent = movie.nombre
    movieSynopsis.textContent = movie.sinopsis
    movieCast.textContent = movie.reparto
    movieDirection.textContent = movie.direccion
    movieRelease.textContent = movie.year
    movieGenres.textContent = movie['generos'].toString().replaceAll(',', ', ')

    editButton.value = movie._id
}


editButton.addEventListener('click', editMovie)


const carouselItems = document.querySelectorAll('.carousel-item')
carouselItems.forEach(item => {
    item.addEventListener('click', async () => {
        const carouselItemData = await getDataByID(item.dataset.id)
        setModalData(carouselItemData)
    })
})

