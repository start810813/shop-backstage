<template>
  <UIModal
    title="編輯帳號"
    :isShow="isShowModal"
    @cancel="cancel()"
    @confirm="confirm()"
  >
    <template v-slot:modal-content>
      <UITextbox
        type="email"
        size="large"
        label="帳號"
        placeholder="請輸入帳號"
        v-model="email"
        required
        disabled
      />
      <UITextbox
        type="password"
        size="large"
        label="密碼"
        placeholder="請輸入密碼"
        :errorMessage="passwordErrorMessage"
        v-model="password"
        required
      />
      <UITextbox
        type="password"
        size="large"
        label="確認密碼"
        placeholder="請再次輸入密碼"
        :errorMessage="confirmPasswordErrorMessage"
        v-model="confirmPassword"
        required
      />
    </template>
  </UIModal>
</template>
<script>
import UIModal from '@/components/UIModal'
import UITextbox from '@/components/UITextbox'
import { mapState, mapActions } from 'vuex'
import VueTypes from 'vue-types'
import {
  passwordMessage,
  validPassword,
  confirmPasswordMessage,
  validConfirmPassword
} from '../helpers/validation'

export default {
  name: 'EditModal',
  components: {
    UIModal,
    UITextbox
  },
  props: {
    account: VueTypes.object.def({
      key: 0,
      email: ''
    })
  },
  methods: {
    ...mapActions('account/list/edit', ['showModal']),
    ...mapActions('account/list', ['editAccountPassword']),
    cancel () {
      this.showModal(false)
      this.resetModal()
    },
    confirm () {
      if (this.canSubmit) {
        const payload = {
          key: this.key,
          password: this.password
        }
        this.editAccountPassword(payload)
        this.showModal(false)
        this.resetModal()
      }
    },
    resetModal () {
      this.password = ''
      this.confirmPassword = ''
    }
  },
  computed: {
    ...mapState({
      isShowModal: (state) => state.account.list.edit.isShowModal
    }),
    key () {
      return this.account.key
    },
    email () {
      return this.account.email
    },
    passwordErrorMessage () {
      if (!this.password) return ''
      return validPassword(this.password) ? '' : passwordMessage
    },
    confirmPasswordErrorMessage () {
      if (!this.confirmPassword) return ''
      return validConfirmPassword(this.confirmPassword, this.password)
        ? ''
        : confirmPasswordMessage
    },
    canSubmit () {
      return (
        validPassword(this.password) &&
        validConfirmPassword(this.confirmPassword, this.password)
      )
    }
  },
  data () {
    return {
      password: '',
      confirmPassword: ''
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
