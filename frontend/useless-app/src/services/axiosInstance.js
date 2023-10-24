import axios from 'axios'

const localURL = 'http://localhost:8081/'
const prodURL = 'https://api.production.url.com/'

const isProd = import.meta.env.VITE_CURRENT_ENV === 'prod'

const axiosInstance = axios.create({
  baseURL: isProd ? prodURL : localURL,
})

export { axiosInstance as axios }