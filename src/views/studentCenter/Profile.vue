<template lang="pug">
#section01.flex.justify-content-space-between
  h1 個人資料
#section02
  n-form(
    ref="formRef"
    :model="form"
    @submit.prevent="submitForm"
  )
    n-form-item(
      path="image"
      label="大頭貼"
    )
      n-upload(
        v-model:file-list="form.image"
        list-type="image-card"
      )
        n-button 點擊上傳
    n-form-item(
      path="name"
      label="姓名"
    )
      n-input(
        size="small"
        placeholder="姓名"
        style="width:200px"
        v-model:value="form.name"
      )
    n-form-item(
      path="phone"
      label="電話"
    )
      n-input(
        size="small"
        placeholder="電話"
        style="width:200px"
        v-model:value="form.phone"
      )
    n-form-item(
      path="place"
      label="地區"
    )
      n-checkbox-group(
        v-model:value="form.place"
      )
        n-checkbox(
          value="北區"
          label="北區"
        )
        n-checkbox(
          value="中區"
          label="中區"
        )
        n-checkbox(
          value="南區"
          label="南區"
        )
        n-checkbox(
          value="東區"
          label="東區"
        )
        n-checkbox(
          value="外島"
          label="外島"
        )
    n-form-item(
      path="findCourse"
      label="尋找課程"
    )
      n-checkbox-group(
        v-model:value='form.findCourse'
      )
        n-checkbox(
          value="健體"
          label="健體"
        )
        n-checkbox(
          value="健力"
          label="健力"
        )
        n-checkbox(
          value="瑜珈"
          label="瑜珈"
        )
        n-checkbox(
          value="有氧"
          label="有氧"
        )
        n-checkbox(
          value="游泳"
          label="游泳"
        )
    n-form-item(
      path="time"
      label="上課時段"
    )
      n-select(
        :options="optionsOfTime"
        placeholder="上課時段"
        v-model:value="form.time"
      )
    n-form-item(
      path="name"
      label="自我介紹"
    )
      n-input(
        size="small"
        type="textarea"
        placeholder="自我介紹"
        v-model:value="form.introduction"
      )
    #section03.flex.justify-content-space-between
      #section04.flex
        n-switch(
          size="small"
          v-model:value="form.sell"
        ) 
        p 是否上架
      n-button(
        attr-type="submit"
        color="#475F77"
        :loading='form.submitting'
      ) 送出
</template>

<script setup>
import Swal from 'sweetalert2'
import { ref, reactive } from 'vue'
import { apiAuth } from '../../plugins/axios'

// const formRef = ref('')

const profile = reactive([])

const image = ref('')

const form = reactive({
  _id: '',
  name: '',
  phone: '',
  place: [],
  findCourse: [],
  time: null,
  introduction: '',
  image: [],
  sell: false,
  submitting: false
})

const optionsOfTime = [
  {
    label: "06:00 ~ 12:00",
    value: '06:00 ~ 12:00',
  },
  {
    label: "12:00 ~ 18:00",
    value: '12:00 ~ 18:00',
  },
  {
    label: "18:00 ~ 00:00",
    value: '18:00 ~ 00:00',
  },
  {
    label: "00:00 ~ 06:00",
    value: '00:00 ~ 06:00',
  },
]

const submitForm = async () => {
  const fd = new FormData
  for (const key in form) {
    if (['_id', 'idx', 'submitting',].includes(key)) continue
    else if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
    } else if (key === 'place') {
      for (let i = 0; i < form[key].length; i++) {
        fd.append('place[]', form[key][i])
      }
    } else if (key === 'findCourse') {
      for (let i = 0; i < form[key].length; i++) {
        fd.append('findCourse[]', form[key][i])
      }
    }
    else fd.append(key, form[key])
  }
  form.submitting = true
  try {
    if (form._id.length === 0) {
      await apiAuth.post('/users/profile', fd)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      await apiAuth.patch('/users/profile/' + form._id, fd)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '修改成功'
      })

    }
    form.submitting = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/profile')
    profile.push({ ...data.result })
    const user = profile[0]
    form._id = user._id
    form.name = user.name
    form.phone = user.phone
    form.place = user.place
    form.findCourse = user.findCourse
    form.time = user.time
    form.introduction = user.introduction
    form.sell = user.sell
    image.value = user.image
  } catch (error) {
    Swal.fire({
      icon: 'info',
      title: '提示資訊',
      text: '請輸入個人資料'
    })
  }
}

init()
</script>

<style lang="sass" scoped>
#section01
  margin-bottom: 5px

#section02
  width: 100%
  height: 620px
  background: #fff
  padding: 15px 20px
  border-radius: 5px
  overflow: scroll
  overflow-x: hidden
  :deep .n-checkbox__label
    font-size: 1rem
    font-weight: bold

#section03
  padding: 0 5px

#section04
  font-size: 1rem
  font-weight: bold
  p
    margin-left: 10px


</style>