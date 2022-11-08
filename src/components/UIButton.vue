<template>
  <div class="button-container">
    <div
      class="wrapper"
      :class="{
        'small-size': size === 'small',
        'normal-size': size === 'normal',
        'large-size': size === 'large'
      }"
    >
      <button
        :type="formType"
        :class="{
          primary: type === 'primary',
          negative: type === 'negative',
          warning: type === 'warning',
          'primary-hollow': type === 'primaryHollow',
          'negative-hollow': type === 'negativeHollow'
        }"
        @click="$emit('click')"
      >
        <slot>{{ label }}</slot>
      </button>
    </div>
  </div>
</template>
<script>
import VueTypes from 'vue-types'
export default {
  name: 'UIButton',
  emits: ['click'],
  props: {
    formType: VueTypes.string.def('button'),
    size: VueTypes.string.def('normal'),
    type: VueTypes.string.def('primary'),
    label: VueTypes.string.def('')
  },
  methods: {},
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
}

button {
  // remove default style
  all: unset;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}

.primary {
  background-color: $primary-purple;
  border: 2px solid $primary-purple;
  color: $primary-white;
}

.primary-hollow {
  background-color: $primary-white;
  border: 1px solid $primary-purple;
  color: $primary-purple;
  &:hover {
    border: 2px solid $primary-purple;
    font-weight: 500;
  }
}

.negative {
  background-color: $primary-grey;
  border: 2px solid $primary-grey;
  color: $primary-white;
}

.negative-hollow {
  background-color: $primary-white;
  border: 1px solid $primary-grey;
  color: $third-black;
}

.warning {
  background-color: $primary-red;
  border: 2px solid $primary-red;
  color: $primary-white;
}

.small-size {
  width: 90px;
  height: 27px;
  button {
    font-size: 14px;
  }
}

.normal-size {
  width: 120px;
  height: 36px;
}

.large-size {
  width: 350px;
  height: 40px;
}
</style>
