const formLogin = document.getElementById('formLogin')

formLogin.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = new FormData(formLogin)
    const data = Object.fromEntries(formData)

    try {
        const response = await fetch('http://localhost:3000/user/login', {
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
            title: 'Login Error',
            text: "The email or password is incorrect",
            icon: 'error',
            color: 'white',
            iconColor: '#f52314',
            background: '#191919',
            showConfirmButton: false,
            timer: 1500
        })
    }
})








