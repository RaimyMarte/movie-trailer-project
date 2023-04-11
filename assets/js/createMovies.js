import { setModalData } from "./setModalData.js"

export const createMoviesContainer = (movie = {}) => {
    const movieSectionRow = document.getElementById('movieSectionRow')
    const divGalleryItem = document.createElement('div')
    const movieImg = document.createElement('img')

    divGalleryItem.setAttribute('id', movie._id)
    divGalleryItem.setAttribute('class', 'col-xl-3 col-lg-4 col-md-6 gallery-item h-100')
    divGalleryItem.setAttribute('data-bs-toggle', 'modal')
    divGalleryItem.setAttribute('data-bs-target', '#movieModal')
    movieImg.setAttribute('class', 'img-fluid')
    movieImg.setAttribute('src', movie.img)

    // movieSectionRow.appendChild(divGalleryItem)
    // divGalleryItem.appendChild(movieImg)
    movieSectionRow.prepend(divGalleryItem)
    divGalleryItem.prepend(movieImg)
    divGalleryItem.addEventListener('click', () => setModalData(movie))
}

export const deleteAllMoviesContainer = () => {
    const divGalleryItems = document.querySelectorAll('.gallery-item')

    if (divGalleryItems.length === 0) return

    divGalleryItems.forEach(item => item.parentNode.removeChild(item))
}