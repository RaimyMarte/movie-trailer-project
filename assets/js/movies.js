export const createMoviesContainer = () => {
    const movieSectionRow = document.getElementById('movieSectionRow')
    const divCol = document.createElement('div')
    const divGalleryItem = document.createElement('div')
    const movieImg = document.createElement('img')

    divCol.setAttribute('class', 'col-xl-3 col-lg-4 col-md-6')
    divGalleryItem.setAttribute('class', 'gallery-item h-100')
    divGalleryItem.setAttribute('data-bs-toggle', 'modal')
    divGalleryItem.setAttribute('data-bs-target', '#movieModal')
    movieImg.setAttribute('class', 'img-fluid')
    movieImg.setAttribute('src', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81eZzxbS3mL.jpg')

    movieSectionRow.appendChild(divCol)
    divCol.appendChild(divGalleryItem)
    divGalleryItem.appendChild(movieImg)

    divGalleryItem.addEventListener('click', (event) =>console.log(event))
}

export const setModalData = (movie = {}) => {
    const movieVideo = document.getElementById('movie-video')
    const movieSinopsis = document.getElementById('movie-sinopsis')
    const movieReparto = document.getElementById('movie-reparto')
    const movieDireccion = document.getElementById('movie-direccion')
    const movieGuion = document.getElementById('movie-guion')
    const movieGeneros = document.getElementById('movie-generos')

    movieVideo.setAttribute('src', `https://www.youtube.com/embed/${movie.videoID}`)
    movieSinopsis.textContent = movie.sinopsis
    movieReparto.textContent = movie.reparto
    movieDireccion.textContent = movie.direccion
    movieGuion.textContent = movie.guion
    movieGeneros.textContent = movie.generos
}


