<template>
  <div class="login-container">
    <form class="wrapper">
      <h1>請先登入</h1>
      <UITextbox type="email" label="帳號" placeholder="請輸入帳號" size="large" required v-model="account" />
      <UITextbox type="password" label="密碼" placeholder="請輸入密碼" size="large" required v-model="password" />
      <UIButton formType="submit" label="登入" size="large" type="primary" />
    </form>
  </div>
</template>

<script>
import UITextbox from '@/components/UITextbox'
import UIButton from '@/components/UIButton'
export default {
  name: 'LoginPage',
  components: {
    UITextbox,
    UIButton
  },
  data () {
    return {
      account: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
}

::v-deep {
  .button-container .wrapper {
    margin-bottom: 20px;
  }
  .textbox-container .wrapper {
    margin-bottom: 20px;
  }
}
</style>
