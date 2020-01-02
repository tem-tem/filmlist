import axios from 'axios'

const { TMDB_KEY: apiKey = 'f0844452c473688f4cc95d1d40e4a1d8' } = process.env

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Accept: 'application/json',
  },
  timeout: 12000,
})

instance.interceptors.request.use(config => {
  config.params = {
    // add your default ones
    api_key: apiKey,
    // spread the request's params
    ...config.params,
  }
  return config
})

export default instance
