import axios from 'axios'

const api = axios.create({
  baseURL: 'https://users-server-omega.vercel.app'
})

export default api
