<script setup>
import { useStore } from '../../../store'
const store = useStore()
</script>

<template>
  <div class="overflow-x-auto shadow rounded-xl">
    <table class="table w-[80vw] text-xs">
      <tbody
        v-if="store.profileInfo.addresses.length === 0"
        class="flex justify-center p-4 text-sm text-gray-300"
      >
        - Empty -
      </tbody>
      <tbody>
        <tr v-for="(item, index) in store.profileInfo.addresses" :key="index">
          <th>{{ item.coinType }}</th>
          <td>
            <MUWalletAddr show-copy :addr="item.address" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped></style>
