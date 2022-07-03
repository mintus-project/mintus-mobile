<script setup>
import { useRoute } from 'vue-router'
import MUSiteProfile from '../../../components/site/MUSiteProfile.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import Exhibition from './components/Exhibition.vue'
import { useStore } from '@/store'
import { getRecord } from '@/services'

// const store = useStore()
// const route = useRoute()
// const setProfile = async () => {
//   try {
//     const { avatarString, username, domains, addresses } = await getRecord(
//       route.params.address,
//     )
//     store.profileInfo = {
//       ...store.profileInfo,
//       avatarString,
//       username,
//       domains,
//       addresses,
//     }
//   }
//   catch (err) {
//     console.error(err)
//   }
// }
// setProfile()
</script>

<template>
  <div>
    <MUSiteProfile>
      <PersonalInfo />
      <Exhibition />
    </MUSiteProfile>
  </div>
</template>

<style lang="scss" scoped></style>
