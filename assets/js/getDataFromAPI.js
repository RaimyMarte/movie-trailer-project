import { capitalizedString } from "./capitalizedString.js"

export const getDataFromAPI = async () => {
    const url = 'https://movie-trailer-api.netlify.app/.netlify/functions/index/movie'
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getDataByID = async (id) => {
    const url = `https://movie-trailer-api.netlify.app/.netlify/functions/index/movie/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getDataByName = async (string) => {
    const nombre = capitalizedString(string)
    const data = await getDataFromAPI()

    return data.filter(movie => movie.nombre.includes(nombre))
}

export const getDataByGenre = async (genero) => {
    const data = await getDataFromAPI()
    return data.filter(movie => movie.generos.includes(genero))
}

