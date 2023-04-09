import { createMoviesContainer, deleteAllMoviesContainer } from "./createMovies.js"
import { getDataByName } from "./getDataFromAPI.js"

const searchForm = document.getElementById('searchForm')

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  deleteAllMoviesContainer()

  const noResultText = document.getElementById('noResultText')

  const formData = new FormData(searchForm)
  const data = Object.fromEntries(formData)
  const { search } = data

  const movies = await getDataByName(search)

  movies.length === 0 ? noResultText.classList.remove('visually-hidden') : noResultText.classList.add('visually-hidden')

  movies.forEach(movie => createMoviesContainer(movie));
})
