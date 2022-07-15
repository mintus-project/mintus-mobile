<script setup>
import { useRoute } from 'vue-router'
// import { useMessage } from 'naive-ui'
import { useStore } from '../../store'
import { MSG_DURATION } from '../../utils/constants'
import PersonalInfo from './components/PersonalInfo.vue'
import Exhibition from './components/Exhibition.vue'

// const message = useMessage()
const store = useStore()
const route = useRoute()
const setProfile = async () => {
  try {
    store.setProfileInfo(route.params.address)
  }
  catch (e) {
    // message.error(e.message, { duration: MSG_DURATION })
    console.error('setProfile: ', e)
  }
}
setProfile()
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
