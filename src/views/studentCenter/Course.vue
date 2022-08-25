<template lang="pug">
#section01.flex.justify-content-space-between
  h1 我的課程
n-table(:bordered="false" :single-line="false")#table
  thead
    tr
      th 名稱
      th 教練
      th 報名時間
      th 課程狀態
  tbody
    td(colspan='4' style="text-align: center;") 沒有課程

</template>

<script setup>

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

#modalBtnSection
  padding-right: 5px
  .n-button:nth-child(2)
    margin-left: 5px

.n-upload-dragger
  color: #333

#table
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

</style>