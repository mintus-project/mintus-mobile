<script setup>
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { Wallet } from '@/services'

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

const connect = async () => {
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal,
  })

  // Check if connection is already established
  if (!connector.connected) {
  // create new session
    connector.createSession()
  }

  // Subscribe to connection events
  connector.on('connect', (error, payload) => {
    if (error)
      throw error

    // Get provided accounts and chainId
    const { accounts, chainId } = payload.params[0]
  })

  connector.on('session_update', (error, payload) => {
    if (error)
      throw error

    // Get updated accounts and chainId
    const { accounts, chainId } = payload.params[0]
  })

  connector.on('disconnect', (error, payload) => {
    if (error)
      throw error

  // Delete connector
  })
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
      <MUButton @click="$router.push('/profile/address')">
        go to profile
      </MUButton>
      <MUButton @click="Wallet.initWallet">
        connect to wallet
      </MUButton>
    </div>
  </MUSiteDynamicBackground>
</template>

<style scoped></style>
