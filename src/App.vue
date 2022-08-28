<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/user'
import { NConfigProvider } from 'naive-ui'

const themeOverrides = {
  Pagination: {
    itemTextColorHover: '#475F77',
    buttonColor: '#354B5E',
    buttonColorHover: '#475F77',
    buttonIconColor: '#fff',
    buttonIconColorHover: '#fff',
    itemTextColor: '#354B5E',
    itemTextColorActive: '#fff',
    itemColorActive: '#354B5E',
    itemBorderActive: 'none',
    itemColorDisabled: '#475F77',
    itemColorActiveHover: '#475F77'
  },
  Input: {
    textColorDisabled: 'rgba(0, 0, 0, 1)'
  }
}

useUserStore().getUser()
</script>
<template lang="pug">
n-config-provider(
  :breakpoints="{ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }"
  :theme-overrides="themeOverrides"
)
  RouterView
</template>

