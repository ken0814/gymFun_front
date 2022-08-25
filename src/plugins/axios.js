import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API
})

export const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})

apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  config.headers.authorization = `Bearer ${user.token}`
  return config
})

apiAuth.interceptors.response.use(res => {
  return res
}, error => {
  if (error.response) {
    if (error.response.status === 401) {
      if (error.config.url !== '/users/extend' && error.config.url !== '/users/logout') {
        const user = useUserStore()
        // 傳送延長請求
        return apiAuth.post('/users/extend', {}).then(({ data }) => {
          user.token = data.result
          error.config.headers.authorization = `Bearer ${user.token}`
          return axios(error.config)
        }).catch(_ => {
          user.logout()
          return Promise.reject(error)
        })
      }
    }
  }
  return Promise.reject(error)
})