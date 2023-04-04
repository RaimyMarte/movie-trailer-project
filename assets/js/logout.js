const logoutButton = document.getElementById('logoutButton')

logoutButton.addEventListener('click', async (event) => {
    event.preventDefault()

    try {
       fetch('http://localhost:3000/user/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        document.cookie =  `token=; ; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
        
        window.location.href = "../login.html"
    } catch (error) {
        console.log(error)
    }
})