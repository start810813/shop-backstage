import WideLayout from '@/layouts/Wide.vue'
import login from './login'

export default {
  path: '/login',
  component: WideLayout,
  children: [login],
  sidebar: {
    label: '登入',
    isShow: false
  }
}
