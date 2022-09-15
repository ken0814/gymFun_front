<template lang="pug">
.container
  #section01.flex
    #section02.flex.D-column
      h1 關於我們
    #section03.flex.D-column
      h1 關於我們
      p 我畢業於國立高雄應用科技大學，會建立這網頁，是因為自己本身有在健身，又想到新手教練客源不好找，所以就有了這網站

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
  p 
    | Copyright &copy; 2022 kenli &nbsp; 
    br
    | 網站為學習用途，無商業使用。圖片、文字均取自網路
</template>

<script setup>
import { reactive, ref } from 'vue'
import { isEmail } from 'validator'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import { FacebookSquare, Instagram, TwitterSquare, Line } from '@vicons/fa'

const router = useRouter()
</script>

<style lang="sass" scoped>
.container
  width: 100%
  height: calc( 100vh - 164px )

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
  h1
    font-size: 3rem
#section03
  width: 30%
  height: 600px
  background: #fff
  text-align: justify
  border-radius: 5px
  padding: 0 100px
  h1
    display: none
    margin-bottom: 15px
    font-size: 2.5rem
    color: #475F77
  p
    font-size: 1.5rem
    line-height: 3rem
    font-weight: 550
    color: #333

#footer
  width: 100%
  height: 90px
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
    text-align: center

@media (max-width: 1400px)
  #section02
    width: 42%
  #section03
    width: 42%

@media (max-width: 900px)
  #section02
    display: none
  #section03
    width: 60%
    h1
      display: block
      font-size: 2rem
    padding: 0 50px
    p
      font-size: 1.3rem
      line-height: 2rem
</style>