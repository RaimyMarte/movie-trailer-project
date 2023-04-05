if (!document.cookie) window.location.href = "../login.html"


const addMovieForm = document.getElementById('addMovieForm')

addMovieForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const token = document.cookie.replace('token=', '');
    const newMovieData = new FormData(addMovieForm)
    const data = Object.fromEntries(newMovieData)
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    data['generos'] = []
    checkboxes.forEach(checkbox => data['generos'].push(checkbox.value));

    try {
        fetch('http://localhost:3000/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error)
    }
})
