<template lang="pug">
nav
  .nav_container
    #hamburger.flex
      n-button(
        @click="activeate()"
        color="#354B5E"
      )
        n-icon(size="25" color="#fff" :component="Bars")
      RouterLink(to="/")
        h1 GYMFUN
    RouterLink(to="/")
      img(src="@/assets/images/logo.svg")#logo
    #nav_button
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
n-drawer(
  v-model:show="active"
  :width="200"
  placement="left"
)
  n-drawer-content.flex
    RouterLink(to="/")
      img(src="@/assets/images/logo2.svg")
    #drawerButton.flex.D-column
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
      RouterLink(to="/login")
        n-button(v-if='!isLogin' color="#D74B4B") 登入
      RouterLink(to="/admin/")
        n-button(v-if='isAdmin' color='#354B5E') 管理員後台
      RouterLink(to="/student/")
        n-button(v-if='isLogin && !isAdmin && isStudent' color='#354B5E') 學員中心
      RouterLink(to="/coach/")
        n-button(v-if='isLogin && !isAdmin && isCoach' color='#354B5E') 教練中心
      n-button(v-if='isLogin' color="#D74B4B" @click="logout") 登出
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
import { apiAuth } from '../../plugins/axios'
import { Bars } from '@vicons/fa'

const image = ref('')

const active = ref(false)
const activeate = () => {
  active.value = true
}

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, isStudent, isCoach, avatar } = storeToRefs(user)

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
  box-shadow: 0 1px 4px #333

  .nav_container
    width: 60%
    height: 100%
    margin: auto
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 5px
    img
      width: 100px
      height: 50px
      object-fit: cover
    :deep .n-button
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
      font-size: 1rem
      font-weight: 550 !important
#info
  width: calc(80% - 20px)
  height: 600px
  padding-left: 20px

#avatar
  width: 120px
  height: 120px
  border-radius: 50%
  object-fit: cover

#hamburger
  display: none
  h1
    color: #fff

.n-drawer-content
  padding: 40px 0
  background: #DCDDD8
  img
    margin: auto

#drawerButton
  margin-top: 30px
  button
    width: 110px
    height: 40px
    margin: 10px 0
    font-size: 1rem

@media (max-width: 1200px)
  #admin_container
    width: 95%
  .nav_container
    width: 100% !important
    padding: 0 6% !important
    // justify-content: flex-start !important

@media (max-width: 803px)
  #admin_container
    width: 95%
  #logo
    display: none
  #hamburger
    display: flex
    h1
      font-size: 1.5rem
  #nav_button
    display: none
</style>