<template lang="pug">
#section01.flex.justify-content-space-between
  h1 用戶管理
n-table(:bordered="false" :single-line="false")#table
  thead
    tr
      th 帳號
      th 使用者身分
      th 編輯
  tbody
    tr(v-if='users.length > 0' v-for='(user, idx) in users' :key='user._id')
      td {{ user.account }}
      td {{ user.role === 0 ? '學員' : user.role === 1 ? '教練' : user.role === 2 ? '管理員' : '' }}
      td
        n-button(
          @click="clic(user, idx)"
          color="#D74B4B"
        ) 刪除
    tr(v-else)
      td(colspan='3' style="text-align: center;") 沒有使用者


</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { SortAlphaDownAlt } from '@vicons/fa';


const users = reactive([])

// 新增送出
const del = async (user, idx) => {
  try {
    await apiAuth.delete('/users/' + user._id)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    users.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}


const clic = async (user, idx) => {
  const { value: text } = await Swal.fire({
    input: 'text',
    title: '刪除會員',
    icon: 'warning',
    inputLabel: '輸入刪除後，才能刪除會員',
    inputPlaceholder: '請輸入刪除',
    showCancelButton: true
  })

  if (text === '刪除') del(user, idx)
  else if (text === '') Swal.fire('輸入刪除才能刪除會員')
  else if (text !== '刪除') Swal.fire('輸入刪除才能刪除會員')
}
// 抓商品到table
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()

</script>

<style lang="sass" scoped>
#section01
  margin-bottom: 5px

#table
  text-align: center
  thead
    th
      font-size: .9rem
      font-weight: bold
    th:nth-child(1)
      width: 130px
</style>