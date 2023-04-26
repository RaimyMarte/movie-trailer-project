const formLogin = document.getElementById('formLogin')

if (document.cookie)
    window.location.href = "../index.html"

formLogin.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = new FormData(formLogin)
    const data = Object.fromEntries(formData)

    try {
        const response = await fetch('https://movie-trailer-api.netlify.app/.netlify/functions/index/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const userData = await response.json()
        const { token } = userData
        document.cookie = `token=${token}`

        window.location.href = "../index.html"
    } catch (error) {
        Swal.fire({
            title: 'Error al intentar iniciar sesión',
            text: "El correo electrónico o la contraseña es incorrecta",
            icon: 'error',
            color: 'white',
            iconColor: '#f52314',
            background: '#191919',
            showConfirmButton: false,
            timer: 1500
        })
    }
})








