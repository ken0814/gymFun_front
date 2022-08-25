<template lang="pug">
#section01.flex.justify-content-space-between
  h1 我的課程
  n-button(color="#D74B4B" @click="openDialog('', -1)") 新增
n-modal(
  v-model:show="form.showModal"
  :mask-closable="true"
  preset="card"
)#admin-course-modal
  h3 {{ form._id.length > 0 ? '編輯課程' : '新增課程' }}
  n-form(
    ref="formRef"
    :model="form"
    @submit.prevent="submitForm"
  )
    n-form-item(
      path="courseImage"
      label="上傳圖片"
    )
      n-upload(
        directory-dnd
        v-model:file-list="form.image"

      )
        n-upload-dragger 點擊/拖曳上傳
    n-form-item(
      path="courseName"
      label="課程名稱"
    )
      n-input(
        v-model:value="form.name"
        type="text"
        placeholder="請輸入課程名稱"
      )
    n-form-item(
      path="type"
      label="課程種類"
    )
      n-select(
        v-model:value="form.category"
        :options="optionsOfCourse"
        placeholder="請選擇課程種類"
      )
    n-form-item(
      path="place"
      label="上課地點"
    )
      n-input(
        v-model:value="form.place"
        type="text"
        placeholder="請輸入上課地點"
      )
    n-form-item(
      path="time"
      label="上課時段"
    )
      n-select(
        v-model:value="form.time"
        :options="optionsOfTime"
        placeholder="請選擇上課時段"
      )
    n-form-item(
      path="price"
      label="價格"
    )
      n-input-number(
        v-model:value="form.price"
        placeholder="請輸入價格"
      )
    n-form-item(
      path="description"
      label="課程介紹"
    )
      n-input(
        v-model:value="form.description"
        type="textarea"
        placeholder="請輸入課程介紹"
      )
    #on.flex.justify-content-flex-start
      n-switch(
        size="small"
        v-model:value="form.sell"
      )
      p 上架

    #modalBtnSection.flex.justify-content-flex-end
      n-button(
        attr-type="submit"
        color="#D74B4B"
        :loading="form.submitting"
        @click="close"
      ) 送出
      n-button(
        v-if="form._id.length > 0"
        color="#D74B4B"
        :loading="form.submitting"
        @click="del(form._id, form.idx)"
      ) 刪除
      n-button(
        color="#354B5E"
        :disable="form.submitting"
        @click="close"
      ) 取消

n-table(:bordered="false" :single-line="false")#table
  thead
    tr
      th 課程圖片
      th 課程名稱
      th 編輯
  tbody
    tr(v-if="courses.length > 0" v-for='(course, idx) in courses' :key="course._id")
      td 
        img(:src="course.image")
      td {{ course.name }}
      td
        n-button(
          @click="openDialog(course._id, idx)"
          color="#D74B4B"
        ) 編輯
    tr(v-else)
      td(colspan='4' style="text-align: center;") 沒有課程


</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const courses = reactive([])

const courseId = reactive({
  course: ''
})

const form = reactive({
  _id: '',
  name: '',
  price: 0,
  category: null,
  time: null,
  place: '',
  sell: false,
  image: [],
  description: '',
  idx: -1,
  submitting: false,
  showModal: false
})

// modal
const close = () => {
  form.showModal = false
}

// select
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

const optionsOfCourse = [
  {
    label: "健體",
    value: '健體',
  },
  {
    label: "健力",
    value: '健力',
  },
  {
    label: "瑜珈",
    value: '瑜珈',
  },
  {
    label: "有氧",
    value: '有氧',
  },
  {
    label: "游泳",
    value: '游泳',
  },
]

const submitForm = async () => {
  form.submitting = true
  const fd = new FormData
  for (const key in form) {
    if (['_id', 'idx', 'showModal', 'submitting'].includes(key)) continue
    else if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
    } else fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/courses', fd)
      courseId.course = data.result._id
      await apiAuth.post('users/course', courseId)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      await apiAuth.patch('/courses/' + form._id, fd)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '修改成功'
      })
    }
    form.showModal = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.name = courses[idx].name
    form.price = courses[idx].price
    form.category = courses[idx].category
    form.time = courses[idx].time
    form.place = courses[idx].place
    form.sell = courses[idx].sell
    form.description = courses[idx].description
  } else {
    form.name = ''
    form.price = 0
    form.category = null
    form.time = null
    form.place = ''
    form.sell = false
    form.description = ''
  }
  form.image = []
  form.idx = idx
  form.showModal = true
  form.submitting = false
}

const del = async (_id, idx) => {
  try {
    await apiAuth.delete('/courses/' + _id)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    courses.splice(idx, 1)
    form.showModal = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
    form.showModal = false
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/courses')
    for (const idx in data.result.courses) {
      courses.push(data.result.courses[idx].course)
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

init()
</script>

<style lang="sass" scoped>
#section01
  margin-bottom: 5px

#admin-course-modal
  h3
    position: absolute
    top: 15px

.n-card-header__main
  color: #333 !important
  font-weight: bold !important

.n-upload-dragger
  color: #333

#table
  text-align: center
  thead
    th
      font-size: .9rem
      font-weight: bold
    th:nth-child(1)
      width: 130px
  tbody
    td
      img
        width: 80px
        height: 80px
        object-fit: cover
        margin: auto
#on
  p
    font-weight: bold
    font-size: .8rem
    margin-left: 5px

.n-button
  margin-right: 5px
</style>