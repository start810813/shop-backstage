<template>
  <UIModal title="系統訊息" :isShow="isShowModal" @cancel="cancel()">
    <template v-slot:modal-content>
      <p class="content">確認刪除「{{ product.name }}」?</p>
    </template>
    <template v-slot:modal-bottom>
      <UIButton class="button" type="negative" label="取消" @click="cancel()" />
      <UIButton class="button" type="warning" label="刪除" @click="confirm()" />
    </template>
  </UIModal>
</template>
<script>
import UIModal from '@/components/UIModal'
import UIButton from '@/components/UIButton'
import { mapState, mapActions } from 'vuex'
import VueTypes from 'vue-types'

export default {
  name: 'ProductConfirmDeleteModal',
  components: {
    UIModal,
    UIButton
  },
  props: {
    product: VueTypes.object.def({
      key: 0,
      name: ''
    })
  },
  methods: {
    ...mapActions('product/list/delete', ['showModal']),
    ...mapActions('product/list', ['deleteProduct']),
    cancel () {
      this.showModal(false)
    },
    confirm () {
      this.showModal(false)
      this.deleteProduct(this.product.key)
    }
  },
  computed: {
    ...mapState({
      isShowModal: (state) => state.product.list.delete.isShowModal
    })
  }
}
</script>
<style lang="scss" scoped>
.content {
  text-align: left;
  font-size: 16px;
}

.button:not(:last-of-type) {
  margin-right: 20px;
}
</style>
