<template>
  <div class="sidebar-container">
    <div class="wrapper">
      <div class="list">
        <div v-for="(route, idx) of routes" :key="idx" class="item">
          <template v-if="route.children">
            <span class="link" v-text="route.sidebar.label" />
            <div class="list">
              <div
                v-for="(route1, idx1) of route.children"
                :key="idx1"
                class="item"
              >
                <router-link :to="{ name: route1.name }">
                  <span
                    class="link"
                    :class="{ active: currentRouteName === route1.name }"
                    v-text="route1.sidebar.label"
                  />
                </router-link>
              </div>
            </div>
          </template>
          <template v-else>
            <router-link :to="{ name: route1.name }">
              <span class="link" v-text="route1.sidebar.label" />
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'TheSidebar',
  props: {
    msg: String
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  },
  data () {
    return {
      routes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar-container {
  width: $sidebar-width;
}

.wrapper {
  display: flex;
  justify-content: flex-start;
  text-align: left;
}

a {
  text-decoration: none;
  all: unset;
  cursor: pointer;
}

.link {
  cursor: pointer;
}

.active {
  background-color: $primary-purple;
  color: $primary-white;
  padding: 5px 20px;
  margin: -20px;
  border-radius: 15px;
}

.item {
  margin-top: 20px;
}

.list {
  margin: 15 0;
  .list {
    margin: 15px 20px;
  }
}

.item {
  margin: 10px 0;
}
</style>
