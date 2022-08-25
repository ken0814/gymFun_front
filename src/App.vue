<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/user'

useUserStore().getUser()
</script>
<template lang="pug">
RouterView
</template>

