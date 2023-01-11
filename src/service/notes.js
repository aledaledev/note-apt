import axios from 'axios'

const baseUrl = 'http://localhost:3000/notes' 

export const getNotes = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export const createNewNote = async (content) => {
    const note = { content, important:false }
    const response = await axios.post(baseUrl,note)
    return response.data
}

export const deleteFromServer = async id => {
    await axios.delete(`${baseUrl}/${id}`)
    return true
}

export const changeImportance = async (note) => { 
    await axios.put(`${baseUrl}/${note.id}`,note)
}

export const updateServerNote = async (note) => {
    await axios.put(`${baseUrl}/${note.id}`,note)
}