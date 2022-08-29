<template lang="pug">
#section01.flex.justify-content-space-between
  h1 學員管理
n-modal(
  v-model:show="form.showModal"
  :mask-closable="true"
  preset="card"
  style="width: 500px"
)#modal
  h1 報名審查
  n-form(
    :model="form"
    @submit.prevent="submitForm"
  )
    n-form-item(
      path="status"
      label="審查結果"
    )
      n-select(
        v-model:value="form.status"
        :options="options"
        placeholder="請選擇"
      )
    #btnSection.flex.justify-content-flex-end
      n-button(
        color="#D74B4B"
        attr-type="submit"
      ) 送出
#section02
  n-table(:bordered="false" :single-line="false")#table
    thead
      tr
        th 學員
        th 報名課程
        th 報名狀態
        th 審查
    tbody
      tr(v-if="doc.length > 0" v-for="(item, idx) in sliceDoc" :key="item._id")
        td {{ item.studentDocument.name }}
        td {{ item.course.name }}
        td {{ item.status === 0 ? "審查中" : item.status === 1 ? "報名成功" : item.status === 2 ? "報名請求退回" : "" }}
        td 
          n-button(color="#475F77" @click="openModal(item._id, idx + ((currentPage - 1) * pageSize))")
            n-icon(size="25" color="#fff" :component="EditCalendarOutlined"
          )
      tr(v-else) 
        td(colspan='4' style="text-align: center") 沒有學員
n-pagination(v-model:page="currentPage" :page-count="Math.ceil(doc.length / pageSize)")

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

const currentPage = ref(1)
const pageSize = 5
const sliceDoc = computed(() => {
  return doc.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

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
    // form.status = doc[idx].status
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

const submitForm = async () => {
  form.submitting = true
  const dataForm = {
    status: form.status
  }
  try {
    const { data } = await apiAuth.patch('/users/history/' + form._id, dataForm)
    console.log(data.result)
    console.log(doc[form.idx].status)
    doc[form.idx].status = data.result.status
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '成功送出'
    })
    form.status = null
    form.showModal = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
    form.showModal = false
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users//register')
    doc.push(...data.final)
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

i
  font-size: 18px !important

button
  border-radius: 20px

#modal
  h1
    position: absolute
    top: 10.5px
  :deep .n-form-item-label
    font-size: 2rem

#btnSection
  padding: 0 5px

#section02
  height: 575px

.n-pagination
  display: flex
  justify-content: center
  margin-top: 20px
</style>