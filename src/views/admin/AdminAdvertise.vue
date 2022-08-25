<template lang="pug">
#section01.flex.justify-content-space-between
  h1 廣告管理
  n-button(color="#D74B4B" @click="openDialog('', -1)") 新增
n-modal(
  v-model:show="form.showModal"
  :mask-closable="true"
  preset="card"
  @submit.prevent="submitForm"
)#admin-advertise-modal
  h3 {{ form._id.length > 0 ? '編輯廣告' : '新增廣告' }}
  n-form(
    ref="formRef"
    :model="form"
  )
    n-form-item(
      path="advertiseImage"
      label="上傳圖片"
    )
      n-upload(
        directory-dnd
        v-model:file-list="form.image"
      )
        n-upload-dragger 點擊/拖曳上傳
    n-form-item(
      path="advertiseName"
      label="廣告名稱"
    )
      n-input(
        v-model:value="form.name"
        type="text"
        placeholder="輸入廣告名稱"
      )
    n-form-item(
      path="advertiseURL"
      label="廣告網址"
    )
      n-input(
        v-model:value="form.URL"
        type="text"
        placeholder="輸入廣告網址"
      )
    n-form-item(
      path="advertiseName"
      label="廣告內容"
    )
      n-input(
        v-model:value="form.description"
        type="textarea"
        placeholder="輸入廣告內容"
      )
    #modalBtnSection.flex.justify-content-flex-end
      n-button(
        attr-type="submit"
        color="#D74B4B"
        :loading="form.submitting"
        @click="close"
      ) 送出
      n-button(
        v-if="form._id.length > 0"
        color="#D74B4B"
        :loading="form.submitting"
        @click="del(form._id, form.idx)"
      ) 刪除
      n-button(
        color="#354B5E"
        :disable="form.submitting"
        @click="close"
      ) 取消
n-table(:bordered="false" :single-line="false")#table
  thead
    tr
      th 廣告圖片
      th 廣告名稱
      th 編輯
  tbody
    tr(v-if='advertises.length > 0' v-for='(advertise, idx) in advertises' :key='advertise._id')
      td
        img(:src="advertise.image")
      td {{ advertise.name }}
      td
        n-button(
          color="#D74B4B"
          @click="openDialog(advertise._id, idx)"
        ) 編輯
    tr(v-else)
      td(colspan='3' style="text-align: center;") 沒有廣告


</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const advertises = reactive([])

const form = reactive({
  _id: '',
  name: '',
  img: [],
  description: '',
  URL: '',
  idx: -1,
  submitting: false,
  showModal: false
})

const close = () => {
  form.showModal = false
}

const submitForm = async () => {
  form.submitting = true
  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'showModal', 'submitting'].includes(key)) continue
    else if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
    } else fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/bill', fd)
      advertises.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/bill/' + form._id, fd)
      advertises[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.submitting = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.name = advertises[idx].name
    form.description = advertises[idx].description
    form.URL = advertises[idx].URL
  } else {
    form.name = ''
    form.description = ''
  }
  form.image = []
  form.idx = idx
  form.showModal = true
  form.submitting = false
}

const del = async (_id, idx) => {
  try {
    await apiAuth.delete('/bill/' + _id)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    advertises.splice(idx, 1)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.showModal = false
}

// 抓廣告到table
const init = async () => {
  try {
    const { data } = await apiAuth.get('/bill/all')
    advertises.push(...data.result)
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

#admin-advertise-modal
  h3
    position: absolute
    top: 15px

#table
  text-align: center
  thead
    th
      font-size: .9rem
      font-weight: bold
    th:nth-child(1)
      width: 130px
  tbody
    td
      img
        width: 80px
        height: 80px
        object-fit: cover
        margin: auto

.n-button
  margin-right: 5px
</style>