import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import UploadAvatarPage from '../pages/upload-avatar/UploadAvatarPage.vue'

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
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
