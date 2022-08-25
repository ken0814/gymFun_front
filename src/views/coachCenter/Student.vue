<template lang="pug">
#section01.flex.justify-content-space-between
  h1 學員管理
n-modal(
  v-model:show="form.showModal"
  :mask-closable="true"
  preset="card"
)
  h3 報名審查
  n-form(
    :model="form"
  )
    n-form-item(
      path="status"
      label="報名狀態"
    )
      n-select(
        v-model:value="form.status"
        :options="options"
      )
n-table(:bordered="false" :single-line="false")#table
  thead
    tr
      th 學員
      th 報名課程
      th 報名狀態
      th 審查
  tbody
    tr(v-if="doc.length > 0" v-for="(item, idx) in doc" :key="item._id")
      td {{ item.studentDocument.name }}
      td {{ item.course.name }}
      td {{ item.status === 0 ? "審查中" : item.status === 1 ? "報名成功" : item.status === 2 ? "報名請求退回" : "" }}
      td 
        n-button(color="#D74B4B" @click="openModal(item._id, idx)")
          n-icon(size="25" color="#fff" :component="EditCalendarOutlined"
        )
    tr(v-else) 
      td(colspan='4' style="text-align: center") 沒有課程 

</template>

<script setup>
import Swal from 'sweetalert2'
import { ref, reactive } from 'vue'
import { apiAuth } from '../../plugins/axios'
import { EditCalendarOutlined } from '@vicons/material'

const form = reactive({
  _id: '',
  status: [],
  courseName: '',
  studentName: '',
  showModal: false,
  submitting: false
})

const doc = reactive([])

const options = [
  {
    label: "審查通過",
    value: 1,
  },
  {
    label: "審查退回",
    value: 2,
  }
]

const openModal = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.status = doc[idx].status
    form.courseName = doc[idx].course.name
    form.studentName = doc[idx].studentDocument.name
  } else {
    form.status = ''
    form.courseName = ''
    form.studentName = ''
  }
  form.idx = idx
  form.showModal = true
  form.submitting = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users//register')
    doc.push(...data.final)
    console.log(doc)
  } catch (error) {
    console.log(error)
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
      font-size: .9rem
      font-weight: bold
    th:nth-child(1)
      width: 130px

i
  font-size: 18px !important

button
  border-radius: 20px

</style>