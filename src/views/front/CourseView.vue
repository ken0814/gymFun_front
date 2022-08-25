<template lang="pug">
#container.flex
  #section01
    h1 課程列表
    hr
    n-grid(cols="1 s:2 l:4" responsive="screen")
      n-gi(
        v-if='courses.length > 0'
        v-for='(course, idx) in courses'
        :key='course._id'
      )
        a(@click="openDialog(course._id, idx)")
          n-card
            template(#cover)
              img(:src="course.image")
            h3 {{ course.name }}
            h4 運動項目: {{ course.category }}
            h4 上課地點: {{ course.place }}
            h4 上課時段: {{ course.time }}
            h4 價錢: $ {{ course.price }} / 堂
      n-gi(v-else)
        n-card 沒有課程
n-modal(
  v-model:show="showModal"
  preset="card"
  style="width:800px;"
)
  #modal.flex.D-column
    n-grid(cols="s:1 xxl:2" responsive="screen")
      n-gi
        #modalSection01.flex.D-column.align-items-flex-start
          h1 {{ form.name }}
          img(:src="form.image")
          h3 教練: {{ form.coachName }}
          h3 課程地點: {{ form.place }}
          h3 課程時段: {{ form.time }}
          h3 課程價錢: $ {{ form.price }} / 堂
          n-button(color="#D74B4B") 立即報名
      n-gi
        div
          h2 課程介紹
          h4 {{ form.description }}

</template>

<script setup>
import Swal from 'sweetalert2';
import { reactive } from 'vue';
import { api } from '../../plugins/axios';

const showModal = ref(false)

const courses = reactive([])

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

const openDialog = (_id, idx) => {
  showModal.value = true
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

const init = async () => {
  try {
    const { data } = await api.get('/courses/')
    courses.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}

init()

</script>

<style lang="sass" scoped>
.n-grid
  gap:30px !important

.n-card
  background: rgba(255,255,255, 0.4)
  border: none
  border-radius: 8px
  box-shadow: 0 0 10px #475F77
  img
    width: 100%
    height: 200px
    object-fit: cover
    margin-bottom: 10px
    border-radius: 8px 8px 0 0

.n-card:hover
  transform: scale(1.02)
  transition: .3s
  cursor: pointer

#container
  width: 60%
  padding: 80px 0 0 0
  margin: auto

#section01
  width: 100%
  height: calc( 100vh - 148px )
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
    height: 200px
    object-fit: cover
    border-radius: 5px
    margin-bottom: 10px
  button
    margin-top: 10px
    font-size: 1rem
    

#modalSection01
  h1
    position: absolute
    top: 18.4px
</style>