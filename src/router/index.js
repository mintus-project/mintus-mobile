import { createRouter, createWebHashHistory } from 'vue-router'
import UploadAvatarPage from '../pages/upload-avatar/UploadAvatarPage.vue'
import ProfilePage from '../pages/profile/ProfilePage.vue'
import contract from '@/services/contract'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/upload-avatar',
  },

  {
    path: '/upload-avatar',
    name: 'UploadAvatarPage',
    component: UploadAvatarPage,
  },
  {
    path: '/profile/:address',
    name: 'ProfilePage',
    component: ProfilePage,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 守卫
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.beforeEach(async (to, from) => {
  const address = to.params.address
  // TODO: 错误页面
  // if(!checkChain())
  //   return { name: 'Home' }
  if (to.path.split('/').includes('profile')) {
    // 访问的地址是否购买过nft
    // TODO:请求等待页面
    const { avatarString } = await contract.getRecord(address)
    if (avatarString)
      return true // 这时候Pinia还没有create，所以不能设置profileInfo
    else
      return { name: 'Home' }
  }
})

export default router
