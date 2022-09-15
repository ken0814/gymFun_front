<template lang="pug">
#container.flex.D-column.justify-content-space-between
  #section01
    h1 課程列表
    hr
    n-grid(cols="1 sm:2 md:3 lg:4" responsive="screen")
      n-gi(
        v-if='courses.length > 0'
        v-for='(course, idx) in sliceCourses'
        :key='course._id'
      )
        a(@click="openDialog(course._id, idx + ((currentPage - 1) * pageSize))")
          n-card
            template(#cover)
              img(:src="course.image")
            h2 {{     course.name     }}
            h3 運動項目: {{     course.category     }}
            h3 上課地點: {{     course.place     }}
            h3 上課時段: {{     course.time     }}
            h3 價錢: $ {{     course.price     }} / 堂
      n-gi(v-else)
        n-card(style="text-align: center;") 沒有課程
    n-pagination(v-model:page="currentPage" :page-count="Math.ceil(courses.length / pageSize)")
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
  v-model:show="form.showModal"
  preset="card"
  style="width:500px;"
)
  #modal.flex.D-column
    #modalSection01.flex.D-column.align-items-flex-start
      h1 {{     form.name     }}
      img(:src="form.image")
      h3 教練: {{     form.coachName     }}
      h3 課程地點: {{     form.place     }}
      h3 課程時段: {{     form.time     }}
      h3 課程價錢: $ {{     form.price     }} / 堂
      h2 課程介紹
      h4 {{     form.description     }}
      #btnSection.flex
        n-button(
          color="#D74B4B"
          @click="registration()"
          :loding="form.submitting"
        ) 立即報名
</template>

<script setup>
import Swal from 'sweetalert2'
import { reactive, computed } from 'vue'
import { api, apiAuth } from '../../plugins/axios'
import { FacebookSquare, Instagram, TwitterSquare, Line } from '@vicons/fa'

const courses = reactive([])

const currentPage = ref(1)
const pageSize = 8
const sliceCourses = computed(() => {
  return courses.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const form = reactive({
  _id: '',
  name: '',
  price: '',
  category: null,
  time: null,
  place: 0,
  sell: false,
  image: [],
  description: '',
  coachName: '',
  idx: -1,
  submitting: false,
  showModal: false
})

const data = reactive({
  course: '',
  status: 0
})

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.name = courses[idx].name
    form.price = courses[idx].price
    form.category = courses[idx].category
    form.time = courses[idx].time
    form.place = courses[idx].place
    form.sell = courses[idx].sell
    form.description = courses[idx].description
    form.image = courses[idx].image
    form.coachName = courses[idx].profile.name
  }
  form.idx = idx
  form.showModal = true
  form.submitting = false
}

const registration = async () => {
  data.course = form._id.toString()
  try {
    await apiAuth.post('/registration', data)
    form.showModal = false
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '報名成功'
    })
    form.submitting = false
  } catch (error) {
    form.showModal = false
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.response.data.message === 'No auth token') ? '登入後才能報名' : (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
    form.submitting = false
  }
}

const init = async () => {
  try {
    const { data } = await api.get('/courses/')
    courses.push(...data.result)
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
    border-radius: 8px
    box-shadow: 0 0 10px #475F77
    img
      width: 100%
      height: 200px
      object-fit: contain
      margin-bottom: 10px
      border-radius: 8px 8px 0 0

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
  // height: 900px
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
  .grid
    height: 765px

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
    top: 25px
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

@media (max-width: 1200px)
  #container
    width: 85%
</style>