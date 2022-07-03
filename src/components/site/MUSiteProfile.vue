<script setup>
import MUNavbar from './MUNavbar.vue'
import MUFooter from './MUFooter.vue'
</script>

<template>
  <div>
    <MUNavbar class="fixed border-b border-[#F2F2F2]" />
    <div class="min-h-screen flex flex-col">
      <div class="w-full h-72 bg-[#F9F9F9]" />
      <div class="flex-1 flex flex-col items-center mt-[-8.25rem]">
        <slot />
      </div>
      <MUFooter class="" />
    </div>
  </div>
</template>

<style scoped></style>
