<template>
  <div class="list-container">
    <UIList :dataset="products" :cols="cols">
      <template v-slot:edit="{ item }">
        <UIButton
          label="編輯"
          size="small"
          type="primaryHollow"
          @click="editProduct(item)"
        />
      </template>
      <template v-slot:delete="{ item }">
        <UIButton
          label="刪除"
          size="small"
          type="primary"
          @click="deleteProduct(item)"
        />
      </template>
    </UIList>
    <ConfirmDeleteModal :product="itemOnDelete" />
  </div>
</template>

<script>
import UIList from '@/components/UIList'
import UIButton from '@/components/UIButton'
import ConfirmDeleteModal from '../components/ConfirmDeleteModal'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductListPage',
  components: {
    UIList,
    UIButton,
    ConfirmDeleteModal
  },
  methods: {
    ...mapActions({
      showDeleteModal: 'product/list/delete/showModal'
    }),
    editProduct (item) {
      this.itemOnEdit = item
      this.$router.push({
        name: 'ProductDetail',
        params: {
          key: item.key
        }
      })
    },
    deleteProduct (item) {
      this.itemOnDelete = item
      this.showDeleteModal(true)
    }
  },
  computed: {
    ...mapState({
      products: (state) =>
        state.product.list.products.map((product) => {
          product.priceMap = `${product.price}${product.priceUnit}`
          return product
        })
    })
  },
  data () {
    return {
      itemOnDelete: {},
      cols: ['name', 'priceMap', 'edit', 'delete']
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
}
::v-deep {
  .name {
    width: 45%;
  }
  .priceMap {
    width: 15%;
  }
  .edit {
    width: 20%;
  }
  .delete {
    width: 20%;
  }
}
</style>
