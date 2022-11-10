<script setup lang="ts">
import { ref } from 'vue'
import { MyButton } from './components'
import { MyNotification } from './components'
import { NButton } from './components'

let notiStatus = ref(true)

const clearNotification = () => {
  notiStatus.value = false
}
</script>

<template>
  <MyButton>Hello</MyButton>
  <MyNotification
    v-if="notiStatus"
    type="success"
    message="成功了"
    @clear-notification="clearNotification"
  ></MyNotification>
  <NButton>按钮</NButton>
</template>

<style scoped></style>
