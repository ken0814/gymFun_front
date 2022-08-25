import { defineStore } from 'pinia'
import { api, apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import router from '@/router'

export const useUserStore = defineStore({
  id: 'user',
  state () {
    return {
      token: '',
      account: '',
      role: 0,
      cart: 0
    }
  },
  getters: {
    isLogin () {
      return this.token.length !== 0
    },
    isAdmin () {
      return this.role === 2
    },
    isStudent () {
      return this.role === 0
    },
    isCoach () {
      return this.role === 1
    },
    avatar () {
      return 'https://source.boringavatars.com/beam/120/' + this.account
    }
  },
  actions: {
    async login (form) {
      try {
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
        })
      }
    },
    async logout () {
      try {
        await apiAuth.delete('/users/logout')
        router.push('/')
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登出成功'
        })
      } catch (_) {
      }
      this.token = ''
      this.account = ''
      this.role = 0
      this.cart = 0
    }
  }
})