<template lang="pug">
#section01.flex.justify-content-space-between
  h1 我的信箱
n-modal(
  v-model:show="form.showModal"
  :mask-closable="true"
  preset="card"
  style="width: 500px"
)#modal
  h1 查看 / 回復訊息
  n-form(
    :model="form"
    @submit.prevent="submitForm"
  )
    n-form-item(
      path="messageContent"
      label="訊息內容"
    )
      n-input(
        type="textarea"
        placeholder="輸入訊息"
        v-model:value="form.senderMessage"
        :disabled="true"
      )
    n-form-item(
      path="messageContent"
      label="回覆訊息"
    )
      n-input(
        type="textarea"
        placeholder="輸入訊息"
        v-model:value="form.messageContent"
      )
    #btnSection.flex.justify-content-flex-end
      n-button(
        color="#475F77"
        attr-type="submit"
        :loading="form.submitting"
      ) 送出
      n-button(
        color="#D74B4B"
        @click="delMessage()"
        :loading="form.submitting"
      ) 刪除信件
#section02
  n-table(:bordered="false" :single-line="false")#table
    thead
      tr
        th 寄件人
        th 信件內容
        th 時間
        th 查看 / 回復
    tbody
      tr(v-if="messages.length > 0" v-for="(message, idx) in messages" :key="message._id")
        td {{              message.senderProfile.name              }}
        td {{              message.message.content              }}
        td {{              new Date(message.message.date).toLocaleDateString()              }}
        td 
          n-button(
            color="#475F77"
            @click="openModal(message.sender._id, idx + ((currentPage - 1) * pageSize))"
          )
            n-icon(size="25" color="#fff" :component="EditCalendarOutlined"
          )
      tr(v-else)
        td(colspan='4' style="text-align: center") 沒有信件
n-pagination(v-model:page="currentPage" :page-count="Math.ceil(messages.length / pageSize)")

</template>
  
<script setup>
import Swal from 'sweetalert2'
import { ref, reactive } from 'vue'
import { apiAuth } from '../../plugins/axios'
import { EditCalendarOutlined } from '@vicons/material'

const form = reactive({
  message_id: '',
  sender_id: '',
  senderMessage: '',
  messageContent: '',
  showModal: false,
  submitting: false,
  idx: -1
})

const messages = reactive([])

const currentPage = ref(1)
const pageSize = 5
const sliceMessages = computed(() => {
  return messages.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const openModal = (_id, idx) => {
  form.idx = idx
  form.message_id = messages[idx].message._id
  form.sender_id = _id
  form.showModal = true
  form.senderMessage = messages[idx].message.content
}

const submitForm = async () => {
  form.submitting = true
  const data = {
    content: form.messageContent
  }
  try {
    await apiAuth.post('/messages/' + form.sender_id, data)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '送出成功'
    })
    form.messageContent = ''
    form.submitting = false
    form.showModal = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
    form.submitting = false
    form.showModal = false
    form.messageContent = ''
  }
}

const delMessage = async (idx) => {
  try {
    await apiAuth.delete('/messages/' + form.message_id)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    messages.splice(form.idx, 1)
    form.submitting = false
    form.showModal = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
    form.submitting = false
    form.showModal = false
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/messages')
    for (const idx in data.result.messages) {
      messages.push({ ...data.result.messages[idx] })
    }
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

#modal
  h1
    position: absolute
    top: 10.5px
  :deep .n-form-item-label
    font-size: 2rem

#btnSection
  padding: 0 5px
  button:nth-child(2)
    margin-left: 3px

#section02
  height: 575px
  button
    border-radius: 20px

.n-pagination
  display: flex
  justify-content: center
  margin-top: 20px

#senderMessage
  height: 200px
</style>