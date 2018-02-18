import axios from 'axios'

export const gitApiConn = axios.create({
  baseURL: `https://api.github.com/`
})