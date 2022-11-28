<template>
  <button :class="nClass" :disabled="disabled">
    <span><slot></slot></span>
  </button>
</template>
<script lang="ts">
export default {
  name: 'NButton',
}
</script>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
})
const nClass = computed(() => {
  return [
    'n-button',
    `n-button-${props.type}`,
    props.disabled ? 'n-button-disabled' : '',
    props.round ? 'n-button-round' : '',
  ]
})
</script>
<style lang="scss" scoped>
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
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.n-button-primary {
  background: $primary;
  border: 1px solid $primary;
}
.n-button-success {
  background: $success;
  border: 1px solid $success;
}
.n-button-info {
  background: $info;
  border: 1px solid $info;
}
.n-button-warning {
  background: $warning;
  border: 1px solid $warning;
}
.n-button-danger {
  background: $danger;
  border: 1px solid $danger;
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
