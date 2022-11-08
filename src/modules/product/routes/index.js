import StandardLayout from '@/layouts/Standard.vue'
import list from './list'
import detail from './detail'

export default {
  path: '/product',
  component: StandardLayout,
  children: [list, detail],
  sidebar: {
    label: '商品管理',
    isShow: true
  }
}
