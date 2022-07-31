import { createRouter, createWebHashHistory } from 'vue-router'
import UploadAvatarPage from '../pages/upload-avatar/UploadAvatarPage.vue'
import ProfilePage from '../pages/profile/ProfilePage.vue'
import PageNotFound from '../pages/not-found/PageNotFound.vue'
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
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 守卫
// router.beforeEach(async (to, from) => {
// })

export default router
