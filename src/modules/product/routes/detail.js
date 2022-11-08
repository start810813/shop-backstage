import ProductDetailPage from '../views/DetailPage.vue'

export default {
  path: 'detail/:key?',
  name: 'ProductDetail',
  component: ProductDetailPage,
  sidebar: {
    label: '新增',
    isShow: true
  }
}
