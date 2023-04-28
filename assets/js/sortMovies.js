const sortByNameDes = document.getElementById('sortByNameDes')
const sortByYearDes = document.getElementById('sortByYearDes')
const sortByCountryDes = document.getElementById('sortByCountryDes')
const sortByNameAsc = document.getElementById('sortByNameAsc')
const sortByYearAsc = document.getElementById('sortByYearAsc')
const sortByCountryAsc = document.getElementById('sortByCountryAsc')
const movieSectionRow = document.getElementById('movieSectionRow')

const convertGalleryItemsToArray = () => {
    const divGalleryItems = document.querySelectorAll('.gallery-item')
    const galleryItems = Array.from(divGalleryItems)

    return galleryItems
}

sortByNameDes.addEventListener('click', () => {
    const galleryItems = convertGalleryItemsToArray()

    galleryItems.sort((a, b) => b.dataset.nombre.localeCompare(a.dataset.nombre));
    galleryItems.forEach(item => movieSectionRow.prepend(item))
})

sortByYearDes.addEventListener('click', () => {
    const galleryItems = convertGalleryItemsToArray()

    galleryItems.sort((a, b) => a.dataset.year - b.dataset.year);
    galleryItems.forEach(item => movieSectionRow.prepend(item))
})

sortByCountryDes.addEventListener('click', () => {
    const galleryItems = convertGalleryItemsToArray()

    galleryItems.sort((a, b) => b.dataset.country.localeCompare(a.dataset.country));
    galleryItems.forEach(item => movieSectionRow.prepend(item))
})

sortByNameAsc.addEventListener('click', () => {
    const galleryItems = convertGalleryItemsToArray()

    galleryItems.sort((a, b) => a.dataset.nombre.localeCompare(b.dataset.nombre));
    galleryItems.forEach(item => movieSectionRow.prepend(item))
})

sortByYearAsc.addEventListener('click', () => {
    const galleryItems = convertGalleryItemsToArray()

    galleryItems.sort((a, b) => b.dataset.year - a.dataset.year);
    galleryItems.forEach(item => movieSectionRow.prepend(item))
})

sortByCountryAsc.addEventListener('click', () => {
    const galleryItems = convertGalleryItemsToArray()

    galleryItems.sort((a, b) => a.dataset.country.localeCompare(b.dataset.country));
    galleryItems.forEach(item => movieSectionRow.prepend(item))
})


