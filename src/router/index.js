import { createRouter, createWebHashHistory } from 'vue-router'

// Components
// import UserPage from '../pages/user/UserPage.vue'
import ProfilePage from '../pages/user/profile/ProfilePage.vue'
import UploadAvatarPage from '../pages/upload-avatar/UploadAvatarPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/upload-avatar',
  },
  // {
  //   path: '/',
  //   name: 'UserPage',
  //   component: UserPage,
  //   children: [
  //     {
  //       path: '/profile/:address',
  //       name: 'ProfilePage',
  //       component: ProfilePage,
  //     },
  //   ],
  // },
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
