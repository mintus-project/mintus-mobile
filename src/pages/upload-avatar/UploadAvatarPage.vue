<script setup>
const router = useRouter()

const isUploadBtnLoading = ref(false)
const onBeforeUpload = () => {
  isUploadBtnLoading.value = true
}
const onError = () => {
  isUploadBtnLoading.value = false
  alert('failed')
}
const onFinish = async (res) => {
  if (res) {
    // const name = res?.file?.name?.substring(0, res.file.name.lastIndexOf('.'))
    // const addr = await getOwner(name)
    // if (addr)
    //   router.push(`/profile/${addr}`)
    router.push('/profile/addr')
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

      <!-- <n-upload
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
      </n-upload> -->
      <MUButton @click="$router.push('/profile/0xE54538f63f6d69201A41716248DBaF65186de1C4')">
        go to profile
      </MUButton>
    </div>
  </MUSiteDynamicBackground>
</template>

<style scoped></style>
