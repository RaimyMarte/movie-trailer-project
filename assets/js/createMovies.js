import { getDataFromAPI } from "./getDataFromAPI.js"
import { setModalData } from "./setModalData.js"

export const createMoviesContainer = (movie = {}) => {
    const movieSectionRow = document.getElementById('movieSectionRow')
    const divCol = document.createElement('div')
    const divGalleryItem = document.createElement('div')
    const movieImg = document.createElement('img')
    divCol.setAttribute('class', 'col-xl-3 col-lg-4 col-md-6 gallery-item')
    divGalleryItem.setAttribute('class', 'h-100')
    divGalleryItem.setAttribute('data-bs-toggle', 'modal')
    divGalleryItem.setAttribute('data-bs-target', '#movieModal')
    movieImg.setAttribute('class', 'img-fluid')
    movieImg.setAttribute('src', movie.img)

    movieSectionRow.appendChild(divCol)
    divCol.appendChild(divGalleryItem)
    divGalleryItem.appendChild(movieImg)

    divGalleryItem.addEventListener('click', () => setModalData(movie))


}

const movieData = await getDataFromAPI()
movieData.forEach(movie => createMoviesContainer(movie))
