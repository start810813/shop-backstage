<template>
  <div class="insert-container">
    <form class="wrapper" @submit="confirm()">
      <UIBreadcrumb :title="pageTitle" />
      <div class="product-textbox-wrapper">
        <UITextbox
          type="text"
          size="normal"
          label="名稱"
          placeholder="請輸入名稱"
          v-model="nextProduct.name"
          required
        />
        <UITextbox
          type="number"
          size="small"
          label="價格"
          placeholder="請輸入價格"
          v-model="nextProduct.price"
          required
        />
      </div>
      <div class="add-detail-wrapper">
        <h3 v-text="'料理菜單'" />
        <UIButton
          class="button"
          size="small"
          type="primaryHollow"
          label="新增"
          @click="addDetail()"
        />
      </div>
      <UIList :dataset="productDetails" :cols="cols">
        <template v-slot:seqModify="{ item }">
          <UIButton
            label="t"
            size="small"
            class="button"
            type="negativeHollow"
            @click="seqUp(item)"
          >
            <i class="arrow-small-icon up" />
          </UIButton>
          <UIButton
            label="t"
            size="small"
            class="button"
            type="negativeHollow"
            @click="seqDown(item)"
          >
            <i class="arrow-small-icon down" />
          </UIButton>
        </template>
        <template v-slot:modify="{ item }">
          <UIButton
            label="編輯"
            size="small"
            class="button"
            type="primaryHollow"
            @click="editDetail(item)"
          />
          <UIButton
            label="刪除"
            size="small"
            class="button"
            type="primary"
            @click="deleteDetail(item)"
          />
        </template>
      </UIList>
      <div class="submit-button-wrapper">
        <UIButton
          formType="submit"
          class="button"
          size="normal"
          type="primary"
          label="新增"
        />
      </div>
    </form>
    <EditDetailModal :detail="itemOnEdit" />
    <ConfirmDeleteDetailModal :detail="itemOnDelete" />
  </div>
</template>

<script>
import UITextbox from '@/components/UITextbox'
import UIButton from '@/components/UIButton'
import UIList from '@/components/UIList'
import UIBreadcrumb from '@/components/UIBreadcrumb'
import EditDetailModal from '../components/EditDetailModal'
import ConfirmDeleteDetailModal from '../components/ConfirmDeleteDetailModal'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductDetailPage',
  components: {
    UITextbox,
    UIButton,
    UIList,
    UIBreadcrumb,
    EditDetailModal,
    ConfirmDeleteDetailModal
  },
  methods: {
    ...mapActions({
      showEditModal: 'product/list/detail/edit/showModal',
      showDeleteModal: 'product/list/detail/delete/showModal'
    }),
    addDetail () {
      this.itemOnEdit = {}
      this.showEditModal(true)
    },
    editDetail (item) {
      this.itemOnEdit = item
      this.showEditModal(true)
    },
    deleteDetail (item) {
      this.itemOnDelete = item
      this.showDeleteModal(true)
    }
  },
  computed: {
    ...mapState({
      product (state) {
        return (
          state.product.list.products.find(
            (product) => product.key === Number(this.productKey)
          ) || {}
        )
      }
    }),
    productKey () {
      return this.$route.params.key
    },
    productDetails () {
      return this.product.details || []
    },
    pageTitle () {
      return this.productKey ? '編輯商品' : '新增商品'
    }
  },
  watch: {
    product: {
      handler () {
        if (this.product.key) {
          const price = this.product.price
          this.nextProduct = this.product
          this.nextProduct.price = price.toString()
        }
      },
      immediate: true
    }
  },
  data () {
    return {
      nextProduct: {
        key: null,
        name: '',
        price: '',
        priceUnit: '元',
        details: []
      },
      cols: ['name', 'seqModify', 'modify'],
      itemOnEdit: {},
      itemOnDelete: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: flex-start;
}

.product-textbox-wrapper {
  display: flex;
  ::v-deep {
    .textbox-container .wrapper {
      margin-right: 20px;
      margin-bottom: 40px;
    }
  }
}

.add-detail-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

::v-deep {
  .name {
    width: 45%;
  }
  .seqModify {
    width: 15%;
    .button-container {
      &:not(:last-of-type) {
        margin-right: 10px;
      }
      .wrapper {
        width: 18px;
      }
      button {
        padding: 0;
      }
    }
    .arrow-small-icon {
      display: block;
      width: 16px;
      height: 16px;
      &.up {
        transform: rotate(90deg);
      }
      &.down {
        transform: rotate(-90deg);
      }
    }
  }
  .modify {
    width: 40%;
    .button-container {
      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
}

.submit-button-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}
</style>
