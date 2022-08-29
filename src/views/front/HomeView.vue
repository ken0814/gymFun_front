<template lang="pug">
#section01.flex
  .carouselContainer
    n-carousel(autoplay draggable show-dots)
      a(href="https://www.ptfit.pro/pt-article/personal-trainer/6-personal-trainer-advantage" target="_blank")
        img(class="carousel-img" src="../../assets/images/ph1.jpg")
      a(href="https://fitnesstwenty.com/stagnation-period/" target="_blank")
        img(class="carousel-img" src="../../assets/images/ph2.jpg")
      img(class="carousel-img" src="../../assets/images/ph3.jpg")
#section02.flex
  n-grid(
    breakpoints="s: 768"
    cols="1 md:3"
    responsive="screen"
  )
    n-gi.flex.D-column
      p 
        | <n-number-animation ref="numberAnimationInstRef" :from="0" :to="userLength" /> +
      p
        |運動愛好者
      RouterLink(to="/register")
        button 立即加入
    n-gi.flex.D-column
      p 
        | <n-number-animation ref="numberAnimationInstRef" :from="0" :to="coursesLength" /> +
      p
        |運動課程
      RouterLink(to="/findCourse")
        button 立即探索
    n-gi.flex.D-column
      p 
        | <n-number-animation ref="numberAnimationInstRef" :from="0" :to="coachLength" /> +
      p
        |專業教練
      RouterLink(to="/findCoach")
        button 立即探索
#section03.flex
  .container
    n-grid(cols='1 md:2 lg:3' responsive="screen")
      n-gi(v-for='(advertise, idx) in advertises' :key="advertise._id")
        .advertise_card
          n-card(content-style="padding:0px 10px")
            template(#cover)
              img(:src="advertise.image")
            a(
              :href="advertise.URL"
              target="_blank"
            )
              h2 【{{ advertise.name }}】
            #text
              p {{ advertise.description }}

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
  p Copyright &copy; 2022 kenli &nbsp; 網站為學習用途，無商業使用。圖片均取自網路
</template>

<script setup>
import { FacebookSquare, Instagram, TwitterSquare, Line } from '@vicons/fa'
import Swal from 'sweetalert2'
import { api, apiAuth } from '@/plugins/axios'
import { ref, reactive } from 'vue';

const advertises = reactive([])

const usersLength = ref(0)
const coursesLength = ref(0)
const coachLength = ref(0)
const userLength = usersLength.value + coachLength.value

const init = async () => {
  try {
    const { data } = await api.get('/bill/all')
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

const getCourseLength = async () => {
  try {
    const { data } = await api.get('/courses/')
    coursesLength.value = data.result.length
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
getCourseLength()

const getUserLength = async () => {
  try {
    const { data } = await api.get('/users/all')
    usersLength.value = data.result.length
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
getUserLength()

const getCoachLength = async () => {
  try {
    const { data } = await api.get('/users/coach')
    coachLength.value = data.final.length
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

getCoachLength()

const getStudentLength = async () => {
  try {
    const { data } = await api.get('users/student')
    usersLength.value = data.final.length
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

getStudentLength()

</script>

<style lang="sass" scoped>
#section01
  width: 100%
  margin: 24px 0px
  .carouselContainer
    width: 60%
    img
      width: 100%
      height: 100%
      object-fit: contain
#section02
  width:100%
  height: 200px
  margin-bottom: 50px
  background: #D74B4B
  padding: 0 18vw
  font-size: 1.7rem
  color: #fff
  font-weight: bold
  button
    width: 100px
    height: 40px
    border: 2px solid #fff
    border-radius: 5px
    background: #D74B4B
    color: #fff
    font-size: 1.1rem
    margin-top: 7px
    font-weight: bold
  button:hover
    color: #D74B4B
    background: #fff
    cursor: pointer

#section03
  width: 100%
  margin-bottom: 50px
  a
    color: #333 !important
  .container
    width: 60%
    height: 100%
  .n-card
    border: none
    // border-radius: 5px
    height: 100%
    img
      width: 100%
      height: 250px
      object-fit: contain
      border-bottom: 1px solid rgba(33,33,33, 0.1)

.advertise_card
  height: 100%

#text
  text-align: justify
  font-size: 1rem
  line-height: 1.5rem
  font-weight: 540

.n-grid
  gap:15px !important

button:hover
  background: #fff

#footer
  width: 100%
  height: 100px
  background: #354B5E
  justify-content: space-evenly
  #footerIcon_section
    width: 192px
    margin-top: 10px
    justify-content: space-between
    a
      height: 25px
  p
    color: #fff
    font-size: .5rem

@media (max-width: 1200px)
  #section01
    .carouselContainer
      width: 100%
  
  #section02
    font-size: 1.4rem
    margin-bottom: 50px
    button
      font-size: 1rem
    
  #section03
    margin-bottom: 50px

@media (max-width: 768px)
  #section01
    // height: 450px

  #section02
    height: 600px
    font-size: 2rem
    button
      width: 120px
      height: 50px
      font-size: 1.5rem
      margin: 9px 0

  .n-grid
    gap: 20px !important
</style>