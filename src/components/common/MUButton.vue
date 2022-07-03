<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  disabled: Boolean,
  isLoading: {
    type: Boolean,
    default: false,
  },
  btnType: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'outline', 'ghost'].includes(value)
    },
  },
})
</script>

<template>
  <button
    :disabled="props.disabled || props.isLoading"
    mu-btn
    :class="{
      'mu-btn-default': props.btnType === 'default',
      'mu-btn-outline': props.btnType === 'outline',
      'mu-btn-ghost': props.btnType === 'ghost',
    }"
  >
    <span :class="{ 'opacity-0': props.isLoading }">
      <slot />
    </span>
    <div v-if="props.isLoading" class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <Icon height="25" icon="gg:spinner" animate-spin />
    </div>
  </button>
</template>

<style scoped></style>
