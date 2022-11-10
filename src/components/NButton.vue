<script setup lang="ts">
export interface Props {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
}
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
})
</script>
<template>
  <button :class="['btn', `btn-${props.type}`]">
    <slot></slot>
  </button>
</template>
<style scoped></style>
