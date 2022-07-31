<script setup>
import { useRoute } from 'vue-router'
import { useMessage } from 'naive-ui'
import { useStore } from '../../store'
import { MSG_DURATION } from '../../utils/constants'
import PersonalInfo from './components/PersonalInfo.vue'
import Exhibition from './components/Exhibition.vue'
import NonExistPersonalInfo from './components/NonExistPersonalInfo.vue'
import { fromAvatarString5to7 } from '@/utils/generateAvatar'
import contract from '@/services/contract'

const message = useMessage()
const store = useStore()
const route = useRoute()

const isLoading = ref(false)
const isThisUserExist = ref(true)

const setProfile = async () => {
  try {
    isLoading.value = true
    const { avatarString, username, domains, addresses } = await contract.getRecord(
      route.params.address,
    )
    isLoading.value = false

    if (avatarString) {
      isThisUserExist.value = true
      const avatarString7 = fromAvatarString5to7(avatarString)
      store.profileInfo = {
        ...store.profileInfo,
        avatarString: avatarString7,
        username,
        domains,
        addresses,
      }
    }
    else {
      isThisUserExist.value = false
    }
  }
  catch (e) {
    isThisUserExist.value = false
    isLoading.value = false
    message.error(e.message, { duration: MSG_DURATION })
  }
}
watch(() => route.params.address, setProfile, { immediate: true, deep: true })
</script>

<template>
  <div>
    <MULoading :is-loading="isLoading">
      <MUSiteProfile>
        <PersonalInfo v-if="isThisUserExist && !isLoading" />
        <Exhibition v-if="isThisUserExist && !isLoading" />
        <NonExistPersonalInfo v-if="!isThisUserExist && !isLoading" />
      </MUSiteProfile>
    </MULoading>
  </div>
</template>

<style lang="scss" scoped></style>
