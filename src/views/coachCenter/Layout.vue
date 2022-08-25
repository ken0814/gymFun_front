<template lang="pug">
nav
  .nav_container
    RouterLink(to="/")
      img(src="@/assets/images/logo.svg")
    div
      RouterLink(to="/findCourse")
        n-button(color='#354B5E') 找課程
      RouterLink(to="/findCoach")
        n-button(color='#354B5E') 找教練
      RouterLink(to="/findStudent")
        n-button(color='#354B5E') 找學員
      RouterLink(to="/calculator")
        n-button(color='#354B5E') TDEE計算機
      RouterLink(to="/about")
        n-button(color='#354B5E') 關於我們
      RouterLink(to="/coach")
        n-button(color='#354B5E') 教練中心
      n-button(color="#D74B4B" @click="logout") 登出
#admin_container.flex
  #admin_buttonBox.flex.D-column.justify-content-flex-start
    img(:src="image === '' ? avatar : image")#avatar
    RouterLink(to="/coach/")
      n-button(color='#354B5E') 個人資料
    RouterLink(to="/coach/course")
      n-button(color='#354B5E') 課程管理
    RouterLink(to="/coach/student")
      n-button(color='#354B5E') 學員管理
    RouterLink(to="/coach/mail")
      n-button(color='#354B5E') 我的信箱
  #info
    RouterView
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
import { reactive, ref } from 'vue'
import { apiAuth } from '../../plugins/axios';

const image = ref('')

const user = useUserStore()
const { logout } = user
const { avatar } = storeToRefs(user)

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/profile')
    image.value = data.result.image
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
nav
  width: 100%
  height: 74px
  background: #354B5E
  color: #fff
  .nav_container
    width: calc( 60% - 15px )
    height: 100%
    margin: auto
    display: flex
    justify-content: space-between
    align-items: center
    img
      width: 100px
      height: 50px
      object-fit: cover
    .n-button
      font-size: 1rem

#admin_container
  width: 70%
  height: calc( 100vh - 144px )
  margin: auto
#admin_buttonBox
  width: 20%
  height: 600px
  padding: 0 5px
  img
    margin-bottom: 10px
  a
    width: 100%
    .n-button
      width: 100%
      margin-bottom: 10px
#info
  width: calc(80% - 20px)
  height: 600px
  padding-left: 20px

#avatar
  width: 120px
  height: 120px
  border-radius: 50%
  object-fit: cover
</style>