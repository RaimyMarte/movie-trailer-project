const logoutButton = document.getElementById('logoutButton')

logoutButton.addEventListener('click', async (event) => {
    event.preventDefault()
    Swal.fire({
        title: 'Cerrar Sesión',
        text: "¿Quieres cerrar sesión?",
        icon: 'question',
        color: 'white',
        background: '#19191a',
        showCancelButton: true,
        confirmButtonColor: '#0d6efd',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
    })
        .then((result) => {
            if (result.isConfirmed) {
                const token = document.cookie.replace('token=', '');
                try {
                    fetch('https://movie-trailer-api.netlify.app/.netlify/functions/index/user/logout', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                    })
                    document.cookie = `token=; ; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
                    window.location.href = ""

                } catch (error) {
                    Swal.fire({
                        title: 'Logout Error',
                        text: "Logout Error",
                        icon: 'error',
                        color: 'white',
                        iconColor: '#f52314',
                        background: '#191919',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        })
})