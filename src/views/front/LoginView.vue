<template lang="pug">
.container
  #section01.flex
    #section02.flex.D-column.justify-content-space-between
      .flex.D-column
        h1 Welcome
        hr
      .flex.D-column
        h2 歡迎回來，一起運動吧！
      .flex.D-column
        p 還沒註冊嗎?
        RouterLink(to="/register")
          n-button(ghost color="#fff" round) 註冊
    #section03.flex.D-column
      h1 登入
      hr
      n-form(
        ref="formRef"
        :model="form"
        :rules="rules"
        @submit.prevent="login"
      )
        n-form-item(
          path="account"
          label="帳號"
        ) 
          n-input(
            type="text"
            placeholder='請輸入帳號'
            v-model:value="form.account"
          )
        n-form-item(
          path="password"
          label="密碼"
        ) 
          n-input(
            type="password"
            placeholder='請輸入密碼'
            v-model:value="form.password"
          )
        n-form-item
          n-button(
            attr-type="submit"
            color="#D74B4B"
            round
            :loading="loading"
          ) 登入
        RouterLink(to="/register")#register
          p 還沒註冊嗎?
#footer.flex.D-column
  #footerIcon_box.flex
    a(href="https://fb.com")
      n-icon(size="25" color="#fff" :component="FacebookSquare")
    a(href="https://www.instagram.com/")
      n-icon(size="25" color="#fff" :component="Instagram")
    a(href="https://twitter.com")
      n-icon(size="25" color="#fff" :component="TwitterSquare")
    a(href="https://line.me/zh-hant/")
      n-icon(size="25" color="#fff" :component="Line")
  p Copyright &copy; 2022 kenli
  p 網站為學習用途，無商業使用。圖片均取自網路
</template>

<script setup>
import { reactive, ref } from 'vue'
import { FacebookSquare, Instagram, TwitterSquare, Line } from '@vicons/fa'
import { useUserStore } from '@/stores/user.js'

const user = useUserStore()

const loading = ref(false)

const formRef = ref(null)
const form = reactive({
  account: '',
  password: ''
})


const rules = reactive({
  account: [{
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('帳號必填')
      } else if (value.length < 4 || value.length > 20) {
        return new Error('帳號長度為 4 到 20 個字')
      } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return new Error('帳號只能有英文和數字')
      }
    },
    trigger: ["input", "blur"],
  }],
  password: [{
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('密碼必填')
      } else if (value.length < 4 || value.length > 20) {
        return new Error('密碼長度為 4 到 20 個字')
      } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return new Error('帳號只能有英文和數字')
      }
    },
    trigger: ["input", "blur"],
  }]
}
)

const login = () => {
  user.login(form)
}
</script>

<style lang="sass" scoped>

#register
  display: none

.container
  width: 100%
  height: calc( 100vh - 144px )

#section01
  width: 100%
  height: 480px
  background: #D74B4B
  position: absolute
  top: 50%
  transform: translateY(-50%)

#section02
  width: 30%
  height: 480px
  padding: 80px 0
  color: #fff
  letter-spacing: 2.5px
  h1
    font-size: 3rem
  hr
    width: 160px
    height: 2px
    background: #fff
    border: none
    margin-bottom: 30px
  p
    font-size: .9rem
    margin-top: 25px
    margin-bottom: 15px

#section03
  width: 30%
  height: 600px
  background: #fff
  text-align: center
  border-radius: 5px
  h1
    font-size: 2rem
    color: #475F77
  hr
    width: 40px
    height: 2px
    background: #475F77
    border: none
    margin-bottom: 40px
  :deep .n-form-item-label
    color: #475F77
    font-size: 1rem
    font-weight: bold
  :deep .n-form-item-blank
    justify-content: center
    
#footer
  width: 100%
  height: 70px
  background: #354B5E
  justify-content: space-evenly
  #footerIcon_box
    width: 192px
    justify-content: space-between
    a
      height: 25px
  p
    color: #fff
    font-size: .5rem

@media (max-width: 1200px)
  #section02
    width: 42.5%
  #section03
    width: 42.5%

@media (max-width: 803px)
  #section02
    display: none
  #section03
    width: 60%
  #register
    display: block
</style>