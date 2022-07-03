<script setup>
const props = defineProps({
  disabled: Boolean,
  active: Boolean,
})
</script>

<template>
  <button
    class="mu-tag"
    :class="{
      'mu-tag-default': !props.active,
      'mu-tag-active': props.active,
    }"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<style scoped></style>
