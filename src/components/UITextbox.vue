<template>
  <div class="textbox-container">
    <fieldset
      class="wrapper"
      :class="{
        'small-size': size === 'small',
        'normal-size': size === 'normal',
        'large-size': size === 'large',
        disabled: disabled,
        error: !!errorMessage
      }"
    >
      <legend><span v-if="required">*</span>{{ label }}</legend>
      <input
        :name="name"
        :type="type"
        :required="required"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="val"
        @input="(event) => inputHandler(event)"
      />
      <span class="error-message" v-text="errorMessage" />
    </fieldset>
  </div>
</template>
<script>
import VueTypes from 'vue-types'

export default {
  name: 'UITextbox',
  emits: ['input'],
  props: {
    name: VueTypes.string.def(''),
    label: VueTypes.string.def(''),
    type: VueTypes.string.def('text'),
    size: VueTypes.string.def('normal'),
    placeholder: VueTypes.string.def(''),
    errorMessage: VueTypes.string.def(''),
    value: VueTypes.string.def(''),
    required: VueTypes.bool.def(false),
    disabled: VueTypes.bool.def(false)
  },
  methods: {
    inputHandler (event) {
      this.val = event.target.value
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
}

fieldset {
  height: 56px;
  border-radius: 5px;
  border: $third-grey 1px groove;
  padding: 1px;
  margin: 0;

  legend {
    text-align: left;
    font-size: 14px;
    margin-left: 12px;
    font-weight: 500;
    color: $secondary-grey;

    span {
      color: $primary-red;
    }
  }
  &.error {
    padding: 0;
    border: $primary-red 2px groove;
    transition: all 0.1s cubic-bezier(0.25, 0.8, 0.25, 1);

    legend {
      color: $primary-red;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }

  &:focus-within {
    padding: 0;
    border: $primary-purple 2px groove;
    transition: all 0.1s cubic-bezier(0.25, 0.8, 0.25, 1);

    legend {
      color: $primary-purple;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }
}

input {
  // remove default style
  all: unset;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 16px;
  padding: 0 12px;
  color: $third-black;
  text-align: left;
}

.small-size {
  width: 180px;
}

.normal-size {
  width: 380px;
}

.large-size {
  width: 100%;
}

.disabled {
  input {
    opacity: 0.6;
  }
  cursor: not-allowed;
}

.error-message {
  color: $primary-red;
  font-size: 12px;
}
</style>
