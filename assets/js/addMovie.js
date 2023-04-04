if(!document.cookie) window.location.href = "../login.html"


const addMovieForm = document.getElementById('addMovieForm')

addMovieForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const token = document.cookie.replace('token=', '');
    const newMovieData = new FormData(addMovieForm)
    const data = Object.fromEntries(newMovieData)

    try {
        const response = await fetch('http://localhost:3000/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        const userData = await response.json()
        console.log(userData)
    } catch (error) {
        console.log(error)
    }
})
