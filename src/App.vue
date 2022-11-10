<script setup lang="ts">
import { ref } from 'vue'
import { MyButton } from './components'
import MyNotificationVue from './notification/MyNotification.vue'

let notiStatus = ref(true)

const clearNotification = () => {
  notiStatus.value = false
}
</script>

<template>
  <MyButton>Hello</MyButton>
  <MyNotificationVue
    v-if="notiStatus"
    type="success"
    message="成功了"
    @clear-notification="clearNotification"
  ></MyNotificationVue>
</template>

<style scoped></style>
