<template lang="pug">
.container.flex
  n-grid(cols="xs:1 xxl:2" responsive="screen")
    n-gi
      #section01.flex
        div
          div
            h1 BMR 與 TDEE 介紹
            #BMRTDEE_hr
            p
              | 當你要增肌、減脂或是維持體重時，可以透過 BMR 與 TDEE 來了解一天所需的熱量需要多少。
              | 接下來將會介紹 BMR 、 TDEE 讓你更有效率地朝你的目標邁進 !
          div
            h2 BMR ( 基礎代謝率 )
            h2
              | 「一整天不需要移動也能消耗的熱量」
            p
              | 你可能曾經聽過有些人呼吸就會胖、有些人卻躺著也能瘦？這其實跟基礎代謝率(BMR)很有關係。即為身體需要維持運作、休息、維持生命所消耗的最低能量，這也是為什麼要有充足的睡眠，因為睡覺時也是會消耗熱量的！
          div
            h2 TDEE ( 每日總消耗熱量 )
            h2
              | 「維持體重所需的每日總熱量」
            p
              | 身體一整天所消耗掉的熱量。也有人稱為維持體重的熱量，因為當攝取的卡路里 = TDEE，體重會維持。
    n-gi
      #section02.flex
        div
          h1 TDEE 計算機
          hr#calculator_hr
          n-form(
            :model="form"
            @submit.prevent="submitForm"
          )
            n-form-item(
              path="gender"
              label="性別"
              size="small"
            )
              n-radio-group(
                v-model:value="form.gender"
                name="radiogroup"
              )
                n-radio(
                  v-for="gender in genders"
                  :key="gender.value"
                  :value="gender.value"
                ) {{ gender.label }}
            n-form-item(
              path="age"
              label="年齡"
              size="small"
            )
              n-input(
                placeholder="輸入年齡"
                v-model:value="form.age"
              )
            n-form-item(
              path="height"
              label="身高"
              size="small"
            )
              n-input(
                placeholder="輸入身高"
                v-model:value="form.height"
              )
            n-form-item(
              path="weight"
              label="體重"
              size="small"
            )
              n-input(
                placeholder="輸入體重"
                v-model:value="form.weight"
              )
            n-form-item(
              path="activelyLevel"
              label="每周活動量"
              size="small"
            )
              n-select(
                v-model:value="form.activelyLevel"
                :options="optionsOfActivelyLevel"
                placeholder="選擇每周活動量"
              )
            #text.flex.justify-content-space-between
              | TDEE 每日總消耗熱量為 :
              h2 {{ form.value }}
              n-button(
                attr-type="submit"
                color="#D74B4B"
              ) 送出
#section03
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
  p Copyright &copy; 2022 kenli &nbsp; 網站為學習用途，無商業使用。圖片、文字均取自網路
</template>

<script setup>
import { FacebookSquare, Instagram, TwitterSquare, Line } from '@vicons/fa'
import { reactive } from 'vue'

const form = reactive({
  gender: '',
  age: '',
  height: '',
  weight: '',
  activelyLevel: null,
  value: ''
})

const optionsOfActivelyLevel = [
  {
    label: '久坐 / 沒有運動',
    value: 1.2
  },
  {
    label: '每周 1 ~ 3 天',
    value: 1.375
  },
  {
    label: '每周 3 ~ 5 天',
    value: 1.55
  },
  {
    label: '每周 6 ~ 7 天',
    value: 1.725
  },
  {
    label: '長時間運動或體力勞動者',
    value: 1.9
  }
]

const genders = [
  {
    value: 'male',
    label: '男'
  },
  {
    value: 'female',
    label: '女'
  }
]

const submitForm = () => {
  if (form.gender === 'male') {
    const value = (10 * form.weight + 6.25 * form.height - 5 * form.age + 5) * form.activelyLevel
    form.value = Math.round(value)
  } else {
    const value = (10 * form.weight + 6.25 * form.height - 5 * form.age - 161) * form.activelyLevel
    form.value = Math.round(value)
  }
}

</script>

<style lang="sass" scoped>
.container
  width: 60%
  height: calc( 100vh - 144px )
  margin: auto
  line-height: 2rem
  color: #354B5E
  p
    font-size: 1rem
    text-align: justify
    margin-bottom: 10px
    color: #333
  :deep .n-form-item-label
    font-weight: bold
    color: #fff
    font-size: 1rem
  p
    font-weight: 700
    
#section01
  min-width: 200px
  height: 600px
  padding: 10px 25px
  background: #fff
  border-radius: 5px
  div
    margin-bottom: 16px
    h2:nth-child(2)
      color: #D74B4B

#BMRTDEE_hr
  width: 222px
  height: 2px
  background: #354B5E
  border: none
  margin-bottom: 10px

#section02
  min-width: 200px
  height: 600px
  background: #475F77
  padding: 10px 25px
  border-radius: 5px
  color: #fff
  div
    width: 100%
  :deep .n-radio__label
    color: #fff
    font-size: 1rem
    font-weight: bold

#calculator_hr
  width: 151px
  height: 2px
  background: #fff
  border: none
  margin-bottom: 14.5px

#text
  font-size: .9rem

.n-grid
  gap:15px !important

#section03
  width: 100%
  height: 480px
  position: absolute
  top: 50%
  transform: translateY(-50.5%)
  background: #D74B4B
  z-index: -1

// footer
#footer
  width: 100vw
  height: 70px
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

@media (max-width: 1400px)
  .container
    height: 1300px

  #BMRTDEE_hr
    width: 212px

  #calculator_hr
    width: 143px 

  #section03
    height: 1150px
    transform: translateY(-29.5%)

@media (max-width: 768px)
  .container
    height: 1600px

  #section01 
    height: 750px

  #section02
    height: 750px

  #BMRTDEE_hr
    width: 214px

  #calculator_hr
    width: 141px

  #section03
    height: 1450px
    transform: translateY(-23%)

</style>