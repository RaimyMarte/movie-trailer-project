const logoutButton = document.getElementById('logoutButton')

logoutButton.addEventListener('click', async (event) => {
    event.preventDefault()
    Swal.fire({
        title: 'Logout',
        text: "Do you want to logout?",
        icon: 'question',
        color: 'white',
        background: '#19191a',
        showCancelButton: true,
        confirmButtonColor: '#0d6efd',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
    })
        .then((result) => {
            if (result.isConfirmed) {
                const token = document.cookie.replace('token=', '');
                try {
                    fetch('http://localhost:3000/user/logout', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                    })

                    document.cookie = `token=; ; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
                    window.location.href = "../index.html"
                } catch (error) {
                    console.log(error)
                }

            }
        })

})