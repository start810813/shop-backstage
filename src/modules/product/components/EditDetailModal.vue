<template>
  <UIModal
    title="料理菜單"
    :isShow="isShowModal"
    @cancel="cancel()"
    @confirm="confirm()"
  >
    <template v-slot:modal-content>
      <UITextbox
        type="text"
        size="large"
        label="菜單名稱"
        placeholder="請輸入菜單名稱"
        v-model="nextName"
        required
      />
      <UITextbox
        type="text"
        size="large"
        label="材料"
        placeholder="請輸入材料"
        v-model="material"
      />
    </template>
  </UIModal>
</template>
<script>
import UIModal from '@/components/UIModal'
import UITextbox from '@/components/UITextbox'
import { mapState, mapActions } from 'vuex'
import VueTypes from 'vue-types'

export default {
  name: 'ProductEditDetailModal',
  components: {
    UIModal,
    UITextbox
  },
  props: {
    detail: VueTypes.object.def({
      key: 0,
      name: ''
    })
  },
  methods: {
    ...mapActions('product/list/detail/edit', ['showModal']),
    ...mapActions('product/list/detail', ['addProductDetail']),
    ...mapActions('product/list/detail', ['editProductDetail']),
    cancel () {
      this.showModal(false)
      this.resetModal()
    },
    confirm () {
      if (this.canSubmit) {
        this.showModal(false)
        this.resetModal()
      }
    },
    resetModal () {
      this.nextName = ''
      this.material = ''
    }
  },
  computed: {
    ...mapState({
      isShowModal: (state) => state.product.list.detail.edit.isShowModal
    }),
    nameErrorMessage () {
      if (!this.nextName) return ''
      return '請輸入菜單名稱'
    },
    canSubmit () {
      return this.nextName
    }
  },
  watch: {
    detail () {
      this.nextName = this.detail.name
    }
  },
  data () {
    return {
      nextName: '',
      material: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  text-align: left;
  font-size: 16px;
}

::v-deep {
  .textbox-container .wrapper {
    margin-bottom: 20px;
  }
}
</style>
