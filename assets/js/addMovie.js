import { capitalizedString } from "./capitalizedString.js";
import { createMoviesContainer } from "./createMovies.js";

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

        const response = await fetch('http://localhost:3000/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        const newMovie = await response.json()

        Swal.fire({
            title: 'Movie added',
            text: "The movie has been added",
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
            title: 'Movie add Error',
            text: "The movie has not been added",
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