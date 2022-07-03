<script setup>
import MUNavbar from './MUNavbar.vue'
</script>

<template>
  <div>
    <MUNavbar class="fixed" />
    <div
      class="background min-h-screen flex flex-col items-center overflow-x-hidden"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .background {
    background-color: #ffffff;
    /* background-image: radial-gradient(closest-side, rgb(197, 221, 247), rgba(255, 255, 255, 0));
    background-size: 80vw, 20vh;
    background-position: 0vmax 0vmax;
    background-repeat: no-repeat;
    text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.6),
      0px 4px 4px rgba(0, 0, 0, 0.05); */
  }
</style>
