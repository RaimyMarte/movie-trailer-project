import { capitalizedString } from "./capitalizedString.js"

export const getDataFromAPI = async () => {
    const url = 'http://localhost:3000/movie'
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getDataByID = async (id) => {
    const url = `http://localhost:3000/movie/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getDataByName = async (string) => {
    const nombre = capitalizedString(string)
    const data = await getDataFromAPI()

    return data.filter(movie => movie.nombre.includes(nombre))
}

