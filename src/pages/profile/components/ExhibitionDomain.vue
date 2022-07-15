<script setup>
import { useStore } from '../../../store'
const store = useStore()
// const domains = ref([
//   'Domain111.eth',
//   'Domain111.eth',
//   'Domain111.eth',
//   'Domain111.eth',
//   'Domain111.eth',
//   'Domain111.eth',
//   'Domain111.eth',
//   'Domain111.eth',
// ])
</script>

<template>
  <div class="overflow-x-auto shadow rounded-xl">
    <table class="table w-[80vw] text-xs">
      <tbody>
        <tr v-for="(item, index) in store.profileInfo.domains" :key="index">
          <th>{{ item }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped></style>
