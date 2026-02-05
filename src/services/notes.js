// src/services/notes.js
import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  return axios.get(baseUrl).then(res => res.data)
}

const create = (newNote) => {
  return axios.post(baseUrl, newNote).then(res => res.data)
}

const update = (id, updatedNote) => {
  return axios.put(`${baseUrl}/${id}`, updatedNote).then(res => res.data)
}

// optional: PATCH version (if you want to update only a field)
// const patch = (id, partial) => {
//   return axios.patch(`${baseUrl}/${id}`, partial).then(res => res.data)
// }

export default { getAll, create, update }
