import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import UploadAvatarPage from '../pages/upload-avatar/UploadAvatarPage.vue'
import ProfilePage from '../pages/profile/ProfilePage.vue'

const routes = [
  {
    path: '/',
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

export default router
