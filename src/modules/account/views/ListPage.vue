<template>
  <div class="list-container">
    <UIBreadcrumb title="帳號列表" />
    <UIList :dataset="accounts" :cols="cols">
      <template v-slot:edit="{ item }">
        <UIButton
          label="編輯"
          size="small"
          type="primaryHollow"
          @click="editAccount(item)"
        />
      </template>
      <template v-slot:delete="{ item }">
        <UIButton
          label="刪除"
          size="small"
          type="primary"
          @click="deleteAccount(item)"
        />
      </template>
    </UIList>
    <EditModal :account="itemOnEdit" />
    <ConfirmDeleteModal :account="itemOnDelete" />
  </div>
</template>

<script>
import UIList from '@/components/UIList'
import UIButton from '@/components/UIButton'
import UIBreadcrumb from '@/components/UIBreadcrumb'
import EditModal from '../components/EditModal'
import ConfirmDeleteModal from '../components/ConfirmDeleteModal'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AccountListPage',
  components: {
    UIList,
    UIButton,
    UIBreadcrumb,
    EditModal,
    ConfirmDeleteModal
  },
  methods: {
    ...mapActions({
      getAccounts: 'account/list/getAccounts',
      showEditModal: 'account/list/edit/showModal',
      showDeleteModal: 'account/list/delete/showModal'
    }),
    editAccount (item) {
      this.itemOnEdit = item
      this.showEditModal(true)
    },
    deleteAccount (item) {
      this.itemOnDelete = item
      this.showDeleteModal(true)
    }
  },
  computed: {
    ...mapState({
      accounts: (state) => state.account.list.accounts
    })
  },
  data () {
    return {
      itemOnEdit: {},
      itemOnDelete: {},
      cols: ['email', 'edit', 'delete']
    }
  },
  mounted () {
    this.getAccounts()
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
}
::v-deep {
  .email {
    width: 60%;
  }
  .edit {
    width: 20%;
  }
  .delete {
    width: 20%;
  }
}
</style>
