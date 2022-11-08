<template>
  <div>
    <TheHeader />
    <div class="container">
      <div class="wrapper">
        <TheSidebar />
        <div class="page-view">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader'
import TheSidebar from '@/components/TheSidebar'

export default {
  name: 'StandardLayout',
  components: {
    TheHeader,
    TheSidebar
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100vw;
}
.wrapper {
  display: flex;
  width: $content-width;
  justify-content: space-between;
  margin-top: 60px;
}

.page-view {
  width: calc(100% - $sidebar-width);
  box-sizing: border-box;
}
</style>
