<template lang="pug">
#container.flex
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
              img(:src="coach.document.image")
            h2 {{ coach.document.name }}
      n-gi(v-else)
    n-pagination(v-model:page="currentPage" :page-count="Math.ceil(coachs.length / pageSize)")
n-modal(
  v-model:show="showModal"
  preset="card"
  style="width:500px"
)
  #modal.flex.D-column
    #modalSection01.flex.D-column.align-items-flex-start
      h1 教練資訊
      img(:src="form.image")
      h3 名稱: {{ form.name }}
      h3 連絡電話: {{ form.phone }}
      h3 出沒地點: {{ form.place }}
      h3 教學時段: {{ form.time }}
      h3 擅長項目: {{ form.contentOfCourses }}
      div
        h3 自我介紹: {{ form.introduction }}
      n-button(color="#475F77") 傳送訊息

</template>

<script setup>
import Swal from 'sweetalert2';
import { reactive } from 'vue';
import { api } from '../../plugins/axios';

const showModal = ref(false)

const coachs = reactive([])

const currentPage = ref(1)
const pageSize = 8
const sliceCoachs = computed(() => {
  return coachs.slice((currentPage.value * pageSize) - pageSize, (currentPage.value * pageSize))
})

const form = reactive({
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
  showModal.value = true
  form._id = _id
  if (idx > -1) {
    const coach = coachs[idx].document
    form.name = coach.name
    form.contentOfCourses = coach.contentOfCourses.toString()
    form.phone = coach.phone
    form.place = coach.place.toString()
    form.sell = coach.sell
    form.introduction = coach.introduction
    form.image = coach.image
    form.name = coach.name
    form.time = coach.time
  }
  form.idx = idx
  form.showModal = true
  form.submitting = false
}

const init = async () => {
  try {
    const { data } = await api.get('/users/coach')
    for (const idx in data.final) {
      if (data.final[idx].profile[0].document.sell === true) coachs.push(...data.final[idx].profile)
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
    height: 200px
    object-fit: cover
    border-radius: 5px
    margin-bottom: 10px
  h2
    margin-top: 10px
  button
    margin-top: 10px
    font-size: 1rem
    

#modalSection01
  h1
    position: absolute
    top: 18.4px

#btnSection
  width: 100%
  margin: 15px 0

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