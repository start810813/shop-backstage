<template>
  <UIModal title="系統訊息" :isShow="isShowModal" @cancel="cancel()">
    <template v-slot:modal-content>
      <p class="content">確認刪除「{{ detail.name }}」?</p>
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
  name: 'ProductConfirmDeleteDetailModal',
  components: {
    UIModal,
    UIButton
  },
  props: {
    detail: VueTypes.object.def({
      key: 0,
      name: ''
    })
  },
  methods: {
    ...mapActions('product/list/detail/delete', ['showModal']),
    cancel () {
      this.showModal(false)
    },
    confirm () {
      this.showModal(false)
    }
  },
  computed: {
    ...mapState({
      isShowModal: (state) => state.product.list.detail.delete.isShowModal
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
