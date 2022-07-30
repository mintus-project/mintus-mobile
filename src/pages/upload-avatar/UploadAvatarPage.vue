<script setup>
import { ContractService } from '../../services'

const router = useRouter()
const isUploadBtnLoading = ref(false)
const onBeforeUpload = () => {
  isUploadBtnLoading.value = true
}
const onError = () => {
  isUploadBtnLoading.value = false
  alert('failed')
}
const onFinish = async ({ file, event }) => {
  isUploadBtnLoading.value = false
  try {
    const res = JSON.parse(event?.target?.response)?.data?.result
    if (res) {
      const name = res.substring(0, res.lastIndexOf('.')).toUpperCase()
      const addr = await ContractService.getOwner(name)
      if (addr === '0x0000000000000000000000000000000000000000') {
        state.content = 'upload'
        throw new Error('No record was found.')
      }
      else {
        router.push(`/profile/${addr}`)
      }
    }
  }
  catch (e) {
    console.error('Upload: ', e)
  }
}
</script>

<template>
  <MUSiteDynamicBackground>
    <div class="flex flex-col items-center gap-8 mt-[15vh]">
      <MUTitle>
        <template #title>
          <slot name="title">
            Upload the Avatar
          </slot>
        </template>
        <template #subtitle>
          <slot name="subtitle">
            And then, you can view one's profile page
          </slot>
        </template>
      </MUTitle>

      <n-upload
        :show-file-list="false"
        accept=".png"
        action="https://mintus.link/api/picture_recognition/"
        name="images"
        :disabled="isUploadBtnLoading"
        flex
        justify-center
        items-center
        :on-before-upload="onBeforeUpload"
        :on-error="onError"
        :on-finish="onFinish"
      >
        <MUButton :is-loading="isUploadBtnLoading">
          Browse file
        </MUButton>
      </n-upload>
      <MUButton @click="$router.push('/profile/0xd83039ff4b0d7022281769edb509b32f6c390867')">
        go to profile
      </MUButton>
    </div>
  </MUSiteDynamicBackground>
</template>

<style scoped></style>
