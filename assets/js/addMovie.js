import { capitalizedString } from "./capitalizedString.js";
import { createMoviesContainer } from "./createMovies.js";
import { previewImg } from "./previewImg.js";

const addMovieForm = document.getElementById('addMovieForm')
const addMovieModal = document.getElementById('add-movieModal')

const inputs = addMovieForm.querySelectorAll('.form-control')

const clearInputs = () => {
    const checkboxes = addMovieForm.querySelectorAll("input[type='checkbox']");
    inputs.forEach(input => input.value = '')
    checkboxes.forEach(checkbox => checkbox.checked = false);
}


addMovieForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    try {
        const token = document.cookie.replace('token=', '');
        const newMovieData = new FormData(addMovieForm)
        const data = Object.fromEntries(newMovieData)
        const selectedCheckboxes = addMovieForm.querySelectorAll("input[type='checkbox']:checked");

        data['nombre'] = capitalizedString(data.nombre)
        data['generos'] = []
        selectedCheckboxes.forEach(checkbox => data['generos'].push(checkbox.value));

        const response = await fetch('https://movie-trailer-api.netlify.app/.netlify/functions/index/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        const newMovie = await response.json()

        Swal.fire({
            title: 'Película agregada',
            text: "La película ha sido agregada",
            icon: 'success',
            color: 'white',
            iconColor: '#1f865e',
            background: '#191919',
            showConfirmButton: false,
            timer: 1500
        })

        createMoviesContainer(newMovie)
        clearInputs()

    } catch (error) {
        Swal.fire({
            title: 'Error al agregar película',
            text: "La película no ha sido agregada",
            icon: 'error',
            color: 'white',
            iconColor: '#f52314',
            background: '#191919',
            showConfirmButton: false,
            timer: 1500
        })
    }
})


addMovieModal.addEventListener('hide.bs.modal', clearInputs)

previewImg(addMovieForm)
