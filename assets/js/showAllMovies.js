import { createMoviesContainer } from "./createMovies.js"
import { getDataFromAPI } from "./getDataFromAPI.js"

const movieData = await getDataFromAPI()
movieData.forEach(movie => createMoviesContainer(movie))
