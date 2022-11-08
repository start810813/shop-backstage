<template>
  <UIModal title="系統訊息" :isShow="isShowModal" @cancel="cancel()">
    <template v-slot:modal-content>
      <p class="content">確認刪除「{{ account.email }}」?</p>
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
  name: 'AccountConfirmDeleteModal',
  components: {
    UIModal,
    UIButton
  },
  props: {
    account: VueTypes.object.def({
      key: 0,
      email: ''
    })
  },
  methods: {
    ...mapActions('account/list/delete', ['showModal']),
    ...mapActions('account/list', ['deleteAccount']),
    cancel () {
      this.showModal(false)
    },
    confirm () {
      this.showModal(false)
      this.deleteAccount(this.account.key)
    }
  },
  computed: {
    ...mapState({
      isShowModal: (state) => state.account.list.delete.isShowModal
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
