<script setup></script>

<template>
  <div class="flex flex-col items-center gap-4">
    <h1 class="text-7 font-extrabold leading-10 text-black">
      <slot name="title" />
    </h1>
    <span class="text-[#727272] text-base leading-6">
      <slot name="subtitle" />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
