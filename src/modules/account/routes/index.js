import StandardLayout from '@/layouts/Standard.vue'
import list from './list'
import insert from './insert'

export default {
  path: '/account',
  component: StandardLayout,
  children: [list, insert],
  sidebar: {
    label: '帳號管理',
    isShow: true
  }
}
