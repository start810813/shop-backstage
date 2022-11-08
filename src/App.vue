<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted () {
    const accounts = [
      {
        key: 1000001,
        email: '123@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000002,
        email: '234@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000003,
        email: '345@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000004,
        email: '456@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000005,
        email: '678@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000006,
        email: '789@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000007,
        email: '890@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000008,
        email: '111@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000009,
        email: '112@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000010,
        email: '113@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000011,
        email: '114@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000012,
        email: '115@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000013,
        email: '116@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000014,
        email: '117@test.com',
        password: 'Qq123456'
      },
      {
        key: 1000015,
        email: '118@test.com',
        password: 'Qq123456'
      }
    ]
    if (!window.localStorage.getItem('accounts')) {
      window.localStorage.setItem('accounts', JSON.stringify(accounts))
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
