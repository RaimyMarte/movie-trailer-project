import { createMoviesContainer, deleteAllMoviesContainer } from "./createMovies.js"
import { getDataByName } from "./getDataFromAPI.js"

const searchForm = document.getElementById('searchForm')

searchForm.addEventListener('submit',async (event) => {
  event.preventDefault()
   deleteAllMoviesContainer()

  const formData = new FormData(searchForm)
  const data = Object.fromEntries(formData)
  const { search } = data
 
  const movies = await getDataByName(search)
 if(movies.length === 0) console.log('sin resultados')
  movies.forEach(movie => createMoviesContainer(movie));

})
