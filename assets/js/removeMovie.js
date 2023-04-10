const movieModal = new bootstrap.Modal('#movieModal')

export const removeMovie = ({ target }) => {

    Swal.fire({
        title: 'Remove',
        text: "Do you want to remove the movie?",
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
                try {
                    const token = document.cookie.replace('token=', '');
                    fetch(`http://localhost:3000/movie/${target.value}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                    })

                    const divGalleryItem = document.getElementById(target.value)
                    divGalleryItem.parentNode.removeChild(divGalleryItem)

                    movieModal.hide()

                    Swal.fire({
                        title: 'Movie Removed',
                        text: "The movie has been removed",
                        icon: 'success',
                        color: 'white',
                        iconColor: '#1f865e',
                        background: '#191919',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } catch (error) {
                    Swal.fire({
                        title: 'Remove Error',
                        text: "Remove Error",
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
}