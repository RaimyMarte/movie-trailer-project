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