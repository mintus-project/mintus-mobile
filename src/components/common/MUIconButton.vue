<script setup>
const props = defineProps({
  disabled: Boolean,
})
</script>

<template>
  <button
    class="mu-icon-btn flex gap-2"
    :class="{ 'mu-icon-btn-default': !props.disabled, 'mu-icon-btn-disabled': props.disabled }"
    :disabled="props.disabled"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>

<style scoped></style>
