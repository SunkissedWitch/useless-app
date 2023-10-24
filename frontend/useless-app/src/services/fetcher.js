import { axios } from './axiosInstance'

const fetcher = async (url, ...rest) => {

  const { data } = await axios.get(url, { ...rest })

  return data
}

export { fetcher }
