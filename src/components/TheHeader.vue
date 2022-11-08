<template>
  <div class="header-container">
    <div class="wrapper">
      <div class="inner-wrapper">
        <div class="home-icon" />
      </div>
      <div class="inner-wrapper">
        <router-link to="/">
          <span class="logout" v-text="'登出'" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: $secondary-black;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  width: $content-width;
}

.home-icon {
  width: 24px;
  height: 24px;
  filter: invert(100%);
}

.logout {
  color: $primary-white;
}
</style>
