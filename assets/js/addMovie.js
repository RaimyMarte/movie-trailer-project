if (!document.cookie) window.location.href = "../login.html"


const addMovieForm = document.getElementById('addMovieForm')

addMovieForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    try {

        const token = document.cookie.replace('token=', '');
        const newMovieData = new FormData(addMovieForm)
        const data = Object.fromEntries(newMovieData)
        const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
        const inputs = addMovieForm.querySelectorAll('.form-control')

        data['generos'] = []
        checkboxes.forEach(checkbox => data['generos'].push(checkbox.value));

        fetch('http://localhost:3000/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

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

        inputs.forEach(input => input.value = '')
        checkboxes.forEach(checkbox => checkbox.checked = false);

    } catch (error) {
        console.log(error)
    }
})
