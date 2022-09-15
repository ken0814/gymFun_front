<template lang="pug">
#container.flex.D-column.justify-content-space-between
  #section01
    h1 教練列表
    hr
    n-grid(cols="1 sell:2 sm:2 md:3 lg:4" responsive="screen")
      n-gi(
        v-if='coachs.length > 0'
        v-for='(coach, idx) in sliceCoachs'
        :key='coach._id'
      )
        a(@click="openDialog(coach._id, idx)")
          n-card
            template(#cover)
              img(:src="coach.profile[0].document.image")
            h2 {{   coach.profile[0].document.name   }}
      n-gi(v-else)
        n-card 沒有教練
    n-pagination(v-model:page="currentPage" :page-count="Math.ceil(coachs.length / pageSize)")
  #footer.flex.D-column
    #footerIcon_section.flex
      a(href="https://fb.com")
        n-icon(size="25" color="#fff" :component="FacebookSquare")
      a(href="https://www.instagram.com/")
        n-icon(size="25" color="#fff" :component="Instagram")
      a(href="https://twitter.com")
        n-icon(size="25" color="#fff" :component="TwitterSquare")
      a(href="https://line.me/zh-hant/")
        n-icon(size="25" color="#fff" :component="Line")
    p 
      | Copyright &copy; 2022 kenli &nbsp; 
      br
      | 網站為學習用途，無商業使用。圖片、文字均取自網路
n-modal(
  v-model:show="doc.showModal"
  preset="card"
  style="width:500px"
)
  #modal.flex.D-column
    #modalSection01.flex.D-column.align-items-flex-start
      h1 教練資訊
      img(:src="doc.image")
      h3 名稱: {{   doc.name   }}
      h3 連絡電話: {{   doc.phone   }}
      h3 出沒地點: {{   doc.place   }}
      h3 教學時段: {{   doc.time   }}
      h3 擅長項目: {{   doc.contentOfCourses   }}
      div
        h3 自我介紹: 
        h4 {{   doc.introduction   }}
      n-button(
        color="#475F77"
        @click="openMassageModal()"
        style="margin:10px auto"
      ) 傳送訊息

n-modal(
  v-model:show="form.showModal"
  preset="card"
)#n-modal
  h1 傳送訊息
  n-form(
    ref="formRef"
    :model="form"
    @submit.prevent="submitForm"
  )
    n-form-item(
      path="message"
      label="訊息內容"
    )
      n-input(
        v-model:value="form.content"
        type="textarea"
        placeholder="輸入訊息內容"
      )
    n-button(
      color="#475F77"
      attr-type="submit"
      :loading="form.submitting"
    ) 送出
</template>

<script setup>
import Swal from 'sweetalert2';
import { reactive } from 'vue';
import { api, apiAuth } from '../../plugins/axios'
import { FacebookSquare, Instagram, TwitterSquare, Line } from '@vicons/fa'

const coachs = reactive([])

const currentPage = ref(1)
const pageSize = 8
const sliceCoachs = computed(() => {
  return coachs.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const form = reactive({
  content: '',
  showModal: false,
  submitting: false
})

const doc = reactive({
  _id: '',
  name: '',
  time: '',
  place: '',
  sell: false,
  image: [],
  introduction: '',
  name: '',
  idx: -1,
  showModal: false
})

const openDialog = (_id, idx) => {
  doc._id = _id
  if (idx > -1) {
    const coach = coachs[idx].profile[0].document
    doc.name = coach.name
    doc.contentOfCourses = coach.contentOfCourses.toString()
    doc.phone = coach.phone
    doc.place = coach.place.toString()
    doc.sell = coach.sell
    doc.introduction = coach.introduction
    doc.image = coach.image
    doc.name = coach.name
    doc.time = coach.time
  }
  doc.idx = idx
  doc.showModal = true
}

const openMassageModal = () => {
  form.showModal = true
}

const submitForm = async () => {
  try {
    form.submitting = true
    const data = {
      content: form.content
    }
    await apiAuth.post('/messages/' + doc._id, data)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '送出成功'
    })
    form.submitting = false
    form.showModal = false
    doc.showModal = false
    form.content = ''
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.response.data.message === 'No auth token') ? '請先登入後才能使用訊息功能' : error.isAxiosError ? error.response.data.message : error.message
    })
    form.submitting = false
    form.showModal = false
    doc.showModal = false
    form.content = ''
  }
}

const init = async () => {
  try {
    const { data } = await api.get('/users/coach')
    for (const idx in data.final) {
      if (data.final[idx].profile[0].document.sell === true) coachs.push(data.final[idx])
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
.n-grid
  gap:30px !important

#section01
  .n-card
    background: rgba(255,255,255, 0.4)
    border: none
    border-radius: 15px
    box-shadow: 0 0 10px #475F77
    text-align: center
    img
      width: 150px
      height: 150px
      object-fit: cover
      border-radius: 50%
      margin: 20px auto

.n-card:hover
  transform: scale(1.02)
  transition: .3s
  cursor: pointer

#container
  width: 60%
  height: calc( 100vh - 74px )
  padding: 30px 0 0 0
  margin: auto

#section01
  width: 100%
  margin-bottom: 50px
  h1
    font-size: 1.8rem
    color: #354B5E
  hr
    width: 118px
    height: 3px
    background: #D74B4B
    border: none
    margin-top: -6.5px
    margin-bottom: 20px

#modal
  line-height: 1.5rem
  img
    width: 300px
    height: 300px
    object-fit: contain
    border-radius: 5px
    // margin-bottom: 10px
    margin: 10px auto
  h2
    margin-top: 10px
  button
    margin-top: 10px
    font-size: 1rem
    

#modalSection01
  h1
    position: absolute
    top: 29px
    left: 50%
    transform: translateX(-50%)
  h4
    font-size: 14.5px
    text-align: justify

#btnSection
  width: 100%
  margin: 15px 0

#footer
  width: 100vw
  height: 90px
  background: #354B5E
  justify-content: space-evenly
  #footerIcon_section
    width: 192px
    margin: 10px 0
    justify-content: space-between
    a
      height: 25px
  p
    color: #fff
    font-size: .5rem
    text-align: center

.n-grid
  // height: 830px
  div
    height: 100%

.n-pagination
  display: flex
  justify-content: center
  margin: 20px

#n-modal
  h1
    position: absolute
    top: 12px
  form
    margin-top: 5px
  button
    margin-top: -5px
    float: right

@media (max-width: 1200px)
  #container
    width: 85%
</style>