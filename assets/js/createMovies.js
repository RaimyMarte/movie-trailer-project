import { getDataFromAPI } from "./getDataFromAPI.js"

export const createMoviesContainer = (movie = {}) => {
    const movieSectionRow = document.getElementById('movieSectionRow')
    const divCol = document.createElement('div')
    const divGalleryItem = document.createElement('div')
    const movieImg = document.createElement('img')
    divCol.setAttribute('class', 'col-xl-3 col-lg-4 col-md-6')
    divGalleryItem.setAttribute('class', 'gallery-item h-100')
    divGalleryItem.setAttribute('data-bs-toggle', 'modal')
    divGalleryItem.setAttribute('data-bs-target', '#movieModal')
    movieImg.setAttribute('class', 'img-fluid')
    movieImg.setAttribute('src', movie.img)

    movieSectionRow.appendChild(divCol)
    divCol.appendChild(divGalleryItem)
    divGalleryItem.appendChild(movieImg)

    divGalleryItem.addEventListener('click', () => setModalData(movie))
}

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
    movieGenres.textContent = movie.generos
}

const movieData = await getDataFromAPI()

movieData.forEach(movie => createMoviesContainer(movie))

const hero = document.getElementById('hero')

const MarioBros = {
    "nombre": "The Super Mario Bros",
    "generos": [
        "Adventure",
        "Animation",
        "Comedy"
    ],
    "direccion": "Aaron Horvath, Michael Jelenic",
    "reparto": "Chris Pratt, Anya Taylor-Joy, Charlie Day",
    "sinopsis": "A Brooklyn plumber named Mario travels through the Mushroom Kingdom with a princess named Peach and an anthropomorphic mushroom named Toad to find Mario's brother, Luigi, and to save the world from a ruthless fire-breathing Koopa named Bowser.",
    "video": "TnGl01FkMMo",
    "img": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81VxuVBN1cL.jpg",
    "year": "2023",
}
hero.addEventListener('click', () => setModalData(MarioBros))
