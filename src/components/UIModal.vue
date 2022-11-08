<template>
  <transition name="fade">
    <div v-if="isShow" class="modal-container" @click.self="$emit('cancel')">
      <div class="wrapper">
        <div class="modal-header">
          <slot name="modal-header">
            <h2 v-text="title" />
          </slot>
          <i class="x-cancel-icon" @click="$emit('cancel')" />
        </div>
        <div class="modal-content">
          <slot name="modal-content"></slot>
        </div>
        <div class="modal-bottom">
          <slot name="modal-bottom">
            <UIButton class="button" type="negative" label="取消" @click="$emit('cancel')" />
            <UIButton class="button" type="primary" label="確定" @click="$emit('confirm')" />
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import UIButton from '@/components/UIButton'
import VueTypes from 'vue-types'

export default {
  name: 'UIModal',
  components: {
    UIButton
  },
  emits: ['updateValue', 'confirm'],
  props: {
    isShow: VueTypes.bool.def(false),
    title: VueTypes.string.def('')
  }
}
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $secondary-grey;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  min-width: 400px;
  background-color: $primary-white;
  padding: 25px 20px;
  border-radius: 10px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-content {
  min-height: 100px;
  margin: 30px 0;
}

.modal-bottom {
  display: flex;
  justify-content: flex-end;
}

.button:not(:last-of-type) {
  margin-right: 20px;
}

.x-cancel-icon {
  display: block;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
</style>
