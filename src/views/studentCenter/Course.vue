<template lang="pug">
#section01.flex.justify-content-space-between
  h1 我的課程
n-table(:bordered="false" :single-line="false")#table
  thead
    tr
      th 課程名稱
      th 教練
      th 報名時間
      th 報名狀態
  tbody
    tr(v-if="histories.length > 0" v-for="(history, idx) in histories" :key="history._id")
      td {{  history.course.name  }}
      td {{  history.coachDocument.name  }}
      td {{  new Date(history.history.date).toLocaleDateString()  }}
      td {{  history.history.status === 0 ? '審查中' : history.history.status === 1 ? "報名成功" : history.history.status === 2 ? "報名未通過" : ''  }}
    tr(v-else) 
      td(colspan='4' style="text-align: center") 沒有課程

</template>

<script setup>
import Swal from 'sweetalert2'
import { ref, reactive } from 'vue'
import { apiAuth } from '../../plugins/axios'

const histories = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/histories')
    histories.push(...data.result.histories)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
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
      font-size: 1rem
      font-weight: bold
    th:nth-child(1)
      width: 130px
  tbody
    td
      font-size: 15px

</style>