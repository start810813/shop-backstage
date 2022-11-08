<template>
  <div class="insert-container">
    <div class="wrapper">
      <UIBreadcrumb title="新增帳號" />
      <UITextbox
        type="email"
        size="normal"
        label="帳號"
        placeholder="請輸入帳號"
        :errorMessage="emailErrorMessage"
        v-model="account.email"
        required
      />
      <UITextbox
        type="password"
        size="normal"
        label="密碼"
        placeholder="請輸入密碼"
        :errorMessage="passwordErrorMessage"
        v-model="account.password"
        required
      />
      <UITextbox
        type="password"
        size="normal"
        label="確認密碼"
        placeholder="請再次輸入密碼"
        :errorMessage="confirmPasswordErrorMessage"
        v-model="confirmPassword"
        required
      />
      <div class="button-wrapper">
        <UIButton
          class="button"
          type="negativeHollow"
          label="清空"
          @click="reset()"
        />
        <UIButton
          class="button"
          type="primary"
          label="新增"
          @click="confirm()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UITextbox from '@/components/UITextbox'
import UIButton from '@/components/UIButton'
import UIBreadcrumb from '@/components/UIBreadcrumb'
import { mapActions } from 'vuex'
import {
  emailMessage,
  validEmail,
  passwordMessage,
  validPassword,
  confirmPasswordMessage,
  validConfirmPassword
} from '../helpers/validation'

export default {
  name: 'AccountInsertPage',
  components: {
    UITextbox,
    UIButton,
    UIBreadcrumb
  },
  methods: {
    ...mapActions('account/list', ['insertAccount']),
    confirm () {
      if (this.canSubmit) {
        this.insertAccount(this.account)
        this.reset()
      }
    },
    reset () {
      this.account.email = ''
      this.account.password = ''
      this.confirmPassword = ''
    }
  },
  computed: {
    emailErrorMessage () {
      if (!this.account.email) return ''
      return validEmail(this.account.email) ? '' : emailMessage
    },
    passwordErrorMessage () {
      if (!this.account.password) return ''
      return validPassword(this.account.password) ? '' : passwordMessage
    },
    confirmPasswordErrorMessage () {
      if (!this.confirmPassword) return ''
      return validConfirmPassword(this.confirmPassword, this.account.password)
        ? ''
        : confirmPasswordMessage
    },
    canSubmit () {
      return (
        validEmail(this.account.email) &&
        validPassword(this.account.password) &&
        validConfirmPassword(this.confirmPassword, this.account.password)
      )
    }
  },
  data () {
    return {
      account: {
        email: '',
        password: ''
      },
      confirmPassword: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: flex-start;
}

::v-deep {
  .textbox-container .wrapper {
    margin-bottom: 40px;
  }
}

.button-wrapper {
  display: flex;
  // justify-content: flex-start;
  .button {
    margin-right: 20px;
  }
}
</style>
