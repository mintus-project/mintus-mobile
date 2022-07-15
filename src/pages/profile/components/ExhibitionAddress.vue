<script setup>
import { useStore } from '../../../store'
const store = useStore()
// const addresses = ref([
//   {
//     coinType: 'ETH',
//     address: '0x3a8195422dea3339c14b1b888629b3393bd02f44',
//   },
//   {
//     coinType: 'ETH',
//     address: '0x3a8195422dea3339c14b1b888629b3393bd02f44',
//   },
//   {
//     coinType: 'ETH',
//     address: '0x3a8195422dea3339c14b1b888629b3393bd02f44',
//   },
//   {
//     coinType: 'ETH',
//     address: '0x3a8195422dea3339c14b1b888629b3393bd02f44',
//   },
//   {
//     coinType: 'ETH',
//     address: '0x3a8195422dea3339c14b1b888629b3393bd02f44',
//   },
//   {
//     coinType: 'ETH',
//     address: '0x3a8195422dea3339c14b1b888629b3393bd02f44',
//   },
// ])
</script>

<template>
  <div class="overflow-x-auto shadow rounded-xl">
    <table class="table w-[80vw] text-xs">
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
