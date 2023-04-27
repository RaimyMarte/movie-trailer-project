import { capitalizedString } from "./capitalizedString.js"
import { getDataByID } from "./getDataFromAPI.js"
import { previewImg } from "./previewImg.js"
import { setModalData } from "./setModalData.js"

const acceptButton = document.getElementById('acceptButton')
const movieModal = document.getElementById('movieModal')
const movieModalContainer = document.getElementById('movieModalContainer')
const editMovieForm = document.getElementById('editMovieForm')
const inputs = editMovieForm.querySelectorAll('.form-control')
const checkboxes = editMovieForm.querySelectorAll("input[type='checkbox']");


const clearInputs = () => {
  inputs.forEach(input => input.value = '')
  checkboxes.forEach(checkbox => checkbox.checked = false);

  movieModalContainer.classList.remove('hidden')
  editMovieForm.classList.add('hidden')
}

const editContainer = async (updatedMovie) => {
  const divGalleryItem = document.getElementById(updatedMovie._id)
  const movieImg = divGalleryItem.querySelector('img')

  movieImg.setAttribute('src', updatedMovie.img)
  setModalData(updatedMovie)
  divGalleryItem.addEventListener('click', () => setModalData(updatedMovie))
}

const saveChanges = async (id) => {
  try {
    const token = document.cookie.replace('token=', '');
    const selectedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
    const newMovieData = new FormData(editMovieForm)
    const data = Object.fromEntries(newMovieData)

    data['nombre'] = capitalizedString(data.nombre)
    data['generos'] = []
    selectedCheckboxes.forEach(checkbox => data['generos'].push(checkbox.value));



    const response = await fetch(`https://movie-trailer-api.netlify.app/.netlify/functions/index/movie/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
    const updatedMovie = await response.json()

    Swal.fire({
      title: 'Película editada',
      text: "La película ha sido editada ",
      icon: 'success',
      color: 'white',
      iconColor: '#1f865e',
      background: '#191919',
      showConfirmButton: false,
      timer: 1500
    })

    clearInputs()
    editContainer(updatedMovie)
    previewImg(editMovieForm)

  } catch (error) {
    Swal.fire({
      title: 'Error de edición de la película',
      text: "La película no ha sido editada",
      icon: 'error',
      color: 'white',
      iconColor: '#f52314',
      background: '#191919',
      showConfirmButton: false,
      timer: 1500
    })
  }
}


export const editMovie = async ({ target }) => {
  movieModalContainer.classList.add('hidden')
  editMovieForm.classList.remove('hidden')

  const movie = await getDataByID(target.value)

  inputs.forEach(item => item.value = movie[item.name])

  checkboxes.forEach(item => {
    if (movie.generos.includes(item.value))
      item.checked = true
  })

  acceptButton.value = target.value
}

acceptButton.addEventListener('click', (event) => {
  event.preventDefault()
  saveChanges(event.target.value)

})

movieModal.addEventListener('hide.bs.modal', clearInputs)

previewImg(editMovieForm, movieModal)