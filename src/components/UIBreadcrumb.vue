<template>
  <div class="breadcrumb-container">
    <h1 v-text="title" />
  </div>
</template>
<script>
import VueTypes from 'vue-types'
export default {
  name: 'UIBreadcrumb',
  props: {
    title: VueTypes.string.def('')
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  margin-bottom: 20px;
}
</style>
