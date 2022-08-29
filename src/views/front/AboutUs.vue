<template lang="pug">
.container
  #section01.flex
    #section02.flex.D-column.justify-content-space-between


    #section03.flex.D-column

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
  p Copyright &copy; 2022 kenli &nbsp; 網站為學習用途，無商業使用。圖片、文字均取自網路
</template>

<script setup>
import { reactive, ref } from 'vue'
import { isEmail } from 'validator'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { FacebookSquare, Instagram, TwitterSquare, Line } from '@vicons/fa'

const router = useRouter()
const loading = ref(false)

const formRef = ref(null)
const form = reactive({
  email: '',
  account: '',
  password: '',
  role: null
})

const optionsOFRole = [
  {
    label: '學員',
    value: '0'
  },
  {
    label: '教練',
    value: '1'
  }
]


const rules = reactive({
  email: [{
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('信箱必填')
      } else if (!isEmail(value)) {
        return new Error('信箱格式錯誤')
      }
    },
    trigger: ["input", "blur"]
  }],
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
    trigger: ["input", "blur"]
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
    trigger: ["input", "blur"]
  }]
}
)
const register = async () => {
  // if (!valid.value) return
  loading.value = true
  try {
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
  loading.value = false
}
</script>

<style lang="sass" scoped>
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
    margin: 10px 0
    justify-content: space-between
    a
      height: 25px
  p
    color: #fff
    font-size: .5rem
</style>