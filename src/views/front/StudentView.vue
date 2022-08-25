<template lang="pug">
#container.flex
  #section01
    h1 學員列表
    hr
    n-grid(cols="1 s:2 m:3 l:4" responsive="screen")
      n-gi(
        v-if='students.length > 0'
        v-for='(student, idx) in students'
        :key='student._id'
      )
        a(@click="openDialog(student._id, idx)")
          n-card
            template(#cover)
              img(:src="student.document.image")
            h2 {{ student.name }} 
      n-gi(v-else)
n-modal(
  v-model:show="showModal"
  preset="card"
  style="width:500px"
)
  #modal.flex.D-column
    #modalSection01.flex.D-column.align-items-flex-start
      h1 學員資訊
      img(:src="form.image")
      h3 名稱: {{ form.name }}
      h3 連絡電話: {{ form.phone }}
      h3 出沒地點: {{ form.place }}
      h3 教學時段: {{ form.time }}
      h3 擅長項目: {{ form.findCourse }}
      h3 自我介紹: {{ form.introduction }}
      n-button(color="#D74B4B") 聯絡我

</template>

<script setup>
import Swal from 'sweetalert2';
import { reactive } from 'vue';
import { api } from '../../plugins/axios';

const showModal = ref(false)

const students = reactive([])

const form = reactive({
  _id: '',
  name: '',
  time: '',
  place: '',
  sell: false,
  image: [],
  findCourse: '',
  name: '',
  idx: -1,
  showModal: false
})

const openDialog = (_id, idx) => {
  showModal.value = true
  form._id = _id
  if (idx > -1) {
    const student = students[idx].document
    form.name = student.name
    form.findCourse = student.findCourse.toString()
    form.phone = student.phone
    form.place = student.place.toString()
    form.sell = student.sell
    form.introduction = student.introduction
    form.image = student.image
    form.name = student.name
    form.time = student.time
  }
  form.idx = idx
  form.showModal = true
  form.submitting = false
}

const init = async () => {
  try {
    const { data } = await api.get('/users/student')
    for (const idx in data.result) {
      if (data.result[idx].profile[0].document.sell === true) students.push(...data.result[idx].profile)
    }
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

#container
  width: 60%
  padding: 80px 0 0 0
  margin: auto

#section01
  width: 100%
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
    margin: 0 0 15px 0

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

#modalSection01
  h1
    position: absolute
    top: 19.4px
  h3
    font-size: 1rem
    // letter-spacing: 1px
  button
    margin: auto
    margin-top: 10px
    font-size: 1rem
  div
    width: 100%
    height: 150px
</style>