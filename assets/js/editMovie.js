

import { capitalizedString } from "./capitalizedString.js"
import { getDataByID } from "./getDataFromAPI.js"

const acceptButton = document.getElementById('acceptButton')
const cancelButton = document.getElementById('cancelButton')

const movieModalContainer = document.getElementById('movieModalContainer')
const editMovieForm = document.getElementById('editMovieForm')


const saveChanges = async (movie) => {
  const token = document.cookie.replace('token=', '');

  const newMovieData = new FormData(editMovieForm)
  const data = Object.fromEntries(newMovieData)
  const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  const inputs = editMovieForm.querySelectorAll('.form-control')


  data['nombre'] = capitalizedString(data.nombre)
  data['generos'] = []
  checkboxes.forEach(checkbox => data['generos'].push(checkbox.value));

  Swal.fire({
    title: 'Movie Edited',
    text: "The movie has been edited",
    icon: 'success',
    color: 'white',
    iconColor: '#1f865e',
    background: '#191919',
    showConfirmButton: false,
    timer: 1500
  })

  fetch(`http://localhost:3000/movie/${movie._id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })


  inputs.forEach(input => input.value = '')
  checkboxes.forEach(checkbox => checkbox.checked = false);

  movieModalContainer.classList.remove('hidden')
  editMovieForm.classList.add('hidden')
}


export const editMovie = async (id) => {
  movieModalContainer.classList.add('hidden')
  editMovieForm.classList.remove('hidden')

  const movie = await getDataByID(id)
  const inputs = editMovieForm.querySelectorAll('.form-control')
  const checkboxes = editMovieForm.querySelectorAll("input[type='checkbox']");

  inputs.forEach(item => item.value = movie[item.name])

  checkboxes.forEach(item => {
    if (movie.generos.includes(item.value))
      item.checked = true
  })

  acceptButton.addEventListener('click', (event) => {
    event.preventDefault()
    saveChanges(movie)
  })
}


