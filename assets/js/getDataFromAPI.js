export const getDataFromAPI = async () => {
    const url = 'http://localhost:3000/movie'
    const response = await fetch(url)
    const data = await response.json()
    data.sort().reverse()

    return data
}

export const getDataByID = async (id) => {
    const url = `http://localhost:3000/movie/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getDataByName = async (name) => {
    const words = name.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    const capitalizedSentence = capitalizedWords.join(" ");

    const data = await getDataFromAPI()
    return data.filter(movie => movie.nombre.includes(capitalizedSentence))
}

