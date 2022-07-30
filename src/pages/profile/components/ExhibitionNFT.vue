<script setup>
import { ref } from 'vue'
import { useStore } from '../../../store'
const store = useStore()

const nfts = ref([
  {
    url: 'https://api.lorem.space/image/face?hash=92048',
  },
  {
    url: 'https://api.lorem.space/image/face?hash=92048',
  },
  {
    url: 'https://api.lorem.space/image/face?hash=92048',
  },
  {
    url: 'https://api.lorem.space/image/face?hash=92048',
  },
  {
    url: 'https://api.lorem.space/image/face?hash=92048',
  },
  {
    url: 'https://api.lorem.space/image/face?hash=92048',
  },
  {
    url: 'https://api.lorem.space/image/face?hash=92048',
  },
  {
    url: 'https://api.lorem.space/image/face?hash=92048',
  },
  {
    url: 'https://api.lorem.space/image/face?hash=92048',
  },
])
</script>

<template>
  <div v-if="false" class="flex justify-center p-4 text-sm text-gray-300">
    - Empty -
  </div>
  <div v-else class="grid grid-cols-2 gap-4">
    <div v-for="(item, index) in nfts" :key="index" class="avatar">
      <div class="w-[9.5rem] rounded-2xl border-4 border-white shadow-lg">
        <img :src="item.url">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
