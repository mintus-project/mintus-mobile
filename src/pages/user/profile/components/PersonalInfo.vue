<script setup>
import { Icon } from '@iconify/vue'
// import { useRoute } from 'vue-router'
import MUWalletAddr from '@/components/common/MUWalletAddr.vue'
// import { useStore } from '@/store'
import MUCoin from '@/components/common/MUCoin.vue'
import {
  drawAvatar,
  fromAvatarStringToAvatarConfig,
} from '@/utils/generateAvatar'

// const store = useStore()
// const route = useRoute()

// const canvas = ref(null)

// const isOwnerRef = computed(() => {
//   if (store.userInfo.connected && store.walletInfo.address) {
//     return (
//       store.walletInfo.address.toLowerCase()
//         === route.params.address.toLowerCase()
//     )
//   }
//   else {
//     return false
//   }
// })

// watchEffect(() => {
//   if (store.profileInfo.avatarString) {
//     drawAvatar(
//       canvas,
//       fromAvatarStringToAvatarConfig(store.profileInfo.avatarString),
//       200,
//     )
//   }
// })

// const downloadImageFromCanvas = (canvas, name) => {
//   const aTag = document.createElement('a')
//   aTag.href = canvas.value.toDataURL()
//   aTag.download = name
//   aTag.click()
// }

// const handleDownloadAvatar = () => {
//   downloadImageFromCanvas(canvas, store.profileInfo.avatarString)
// }
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <div class="avatar">
      <div class="w-[12.5rem] rounded-2xl border-4 border-white shadow-lg">
        <canvas ref="canvas" />
      </div>
    </div>
    <span class="font-bold text-3xl">hhhh</span>
    <!-- <span>wallet address</span> -->
    <div class="flex border border-gray-200 rounded-full py-2 px-4 gap-2">
      <MUCoin type="eth" />
      <MUWalletAddr
        class="text-sm text-[#727272]"
        addr="0xE54538f63f6d69201A41716248DBaF65186de1C4"
      />
    </div>
    <div class="flex gap-4">
      <MUIconButton
        v-if="true || isOwnerRef"
      >
        <template #icon>
          <Icon height="16" icon="material-symbols:settings-outline-rounded" />
        </template>
        <template #default>
          Setting
        </template>
      </MUIconButton>
      <MUButton @click="handleDownloadAvatar">
        Download Avatar
      </MUButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
