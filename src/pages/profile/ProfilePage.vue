<script setup>
import { useRoute } from 'vue-router'
import { useMessage } from 'naive-ui'
import { useStore } from '../../store'
import { MSG_DURATION } from '../../utils/constants'
import PersonalInfo from './components/PersonalInfo.vue'
import Exhibition from './components/Exhibition.vue'
import { fromAvatarString5to7 } from '@/utils/generateAvatar'
import contract from '@/services/contract'

const message = useMessage()
const store = useStore()
const route = useRoute()
const setProfile = async () => {
  try {
    const { avatarString, username, domains, addresses } = await contract.getRecord(
      route.params.address,
    )
    const avatarString7 = fromAvatarString5to7(avatarString)
    store.profileInfo = {
      ...store.profileInfo,
      avatarString: avatarString7,
      username,
      domains,
      addresses,
    }
  }
  catch (e) {
    message.error(e.message, { duration: MSG_DURATION })
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
