<script setup>
import { useStore } from '../../../store'
const store = useStore()
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <div class="avatar">
      <div class="w-24 rounded-md border-4 border-white shadow-lg">
        <canvas />
      </div>
    </div>
    <span class="font-bold text-3xl">{{ store.profileInfo.username }}</span>
    <div class="flex border border-gray-200 rounded-full py-2 px-4 gap-2">
      <MUCoin type="eth" />
      <MUWalletAddr
        class="text-sm text-[#727272]"
        :addr="$route.params.address"
      />
    </div>
    <div class="flex gap-4">
      <MUButton>
        Download Avatar
      </MUButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
