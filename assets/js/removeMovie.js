const movieModal = new bootstrap.Modal('#movieModal')

export const removeMovie = ({ target }) => {

    Swal.fire({
        title: 'Eliminar',
        text: "¿Quieres eliminar la película??",
        icon: 'question',
        color: 'white',
        background: '#19191a',
        showCancelButton: true,
        confirmButtonColor: '#0d6efd',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
    })
        .then((result) => {
            if (result.isConfirmed) {
                try {
                    const token = document.cookie.replace('token=', '');
                    fetch(`https://movie-trailer-api.netlify.app/.netlify/functions/index/movie/${target.value}`, {
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
                        title: 'Película eliminada',
                        text: "La película ha sido eliminada",
                        icon: 'success',
                        color: 'white',
                        iconColor: '#1f865e',
                        background: '#191919',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } catch (error) {
                    Swal.fire({
                        title: 'Error al intentar eliminar',
                        text: "Error al intentar eliminar",
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