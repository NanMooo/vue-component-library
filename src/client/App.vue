<template>
  <div class="button-box">
    <NButton type="default">默认按钮</NButton>
    <NButton type="primary">主要按钮</NButton>
    <NButton type="success">成功按钮</NButton>
    <NButton type="info" round>信息按钮</NButton>
    <NButton type="warning" disabled @click="buttonClick">警告按钮</NButton>
    <NButton type="danger">危险按钮</NButton>
  </div>
  <NNotification
    v-if="notiStatus"
    type="success"
    message="成功了"
    @clear-notification="clearNotification"
  ></NNotification>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { NButton, NNotification } from '../index'

let notiStatus = ref(true)

const clearNotification = () => {
  notiStatus.value = false
}

const buttonClick = () => {
  alert('click!!!')
}
</script>

<style scoped>
.button-box {
  padding: 50px;
}
</style>
