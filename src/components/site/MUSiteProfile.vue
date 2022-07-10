<script setup>
import MUNavbar from './MUNavbar.vue'
import MUFooter from './MUFooter.vue'
</script>

<template>
  <div>
    <MUNavbar class="fixed" />
    <div class="min-h-screen flex flex-col">
      <div class="flex-1 flex flex-col items-center pt-30">
        <slot />
      </div>
      <MUFooter class="" />
    </div>
  </div>
</template>

<style scoped></style>
