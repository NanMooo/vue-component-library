<template>
  <!-- <button
    :class="[
      'n-button',
      type ? `n-button-${props.type}` : '',
      disabled ? 'n-button-disabled' : '',
      round ? 'n-button-round' : '',
    ]"
    :disabled="disabled"
  >
    <span><slot></slot></span>
  </button> -->
</template>

<script setup lang="ts">
import { reactive } from 'vue'

export interface Props {
  type?: string
  message?: string
}

const props = defineProps<Props>()
const { type, message } = reactive(props)
</script>

<style lang="scss">
.n-button {
  border: 0;
  padding: 12px 24px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.n-button-default {
  color: #333333;
  border: 1px solid #dcdfe6;
  &:hover,
  &:focus {
    color: var(--primary);
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.n-button-primary {
  background: var(--primary);
  border: 1px solid var(--primary);
}
.n-button-success {
  background: var(--success);
  border: 1px solid var(--success);
}
.n-button-info {
  background: var(--info);
  border: 1px solid var(--info);
}
.n-button-warning {
  background: var(--warning);
  border: 1px solid var(--warning);
}
.n-button-danger {
  background: var(--danger);
  border: 1px solid var(--danger);
}
.n-button-disabled {
  opacity: 0.5;
  cursor: no-drop;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
}
.n-button-round {
  border-radius: 20px;
}
</style>
