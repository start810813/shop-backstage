<template>
  <div class="list-container">
    <div v-if="dataset.length > 0" class="wrapper">
      <div v-for="row of rows" :key="row.key" class="row">
        <div v-for="col of cols" :key="col" class="col" :class="col">
          <slot :name="col" :item="row">
            {{ row[col] }}
          </slot>
        </div>
      </div>
      <div class="page-wrapper">
        <div class="control-wrapper">
          <div
            :class="{ disabled: !pageControl.isShowPrevious }"
            class="angle-small-icon left"
            @click="goPerviousPage()"
          />
          <span
            v-for="index in pageControl.totalPage"
            :key="index"
            :class="{ active: page === index }"
            class="page-index"
            v-text="index"
            @click="page = index"
          />
          <div
            :class="{ disabled: !pageControl.isShowNext }"
            class="angle-small-icon right"
            @click="goNextPage()"
          />
        </div>
        <div v-text="pageControl.wording" />
      </div>
    </div>
    <div v-else class="no-data-found-wrapper">
      <div class="no-data-found-image" />
      <h3 v-text="noDataLabel" />
    </div>
  </div>
</template>
<script>
import VueTypes from 'vue-types'
export default {
  name: 'UIList',
  props: {
    dataset: VueTypes.array.def([]),
    cols: VueTypes.array.def([]),
    noDataLabel: VueTypes.string.def('Oops 暫無資料')
  },
  methods: {
    goPerviousPage () {
      if (this.pageControl.isShowPrevious) this.page -= 1
    },
    goNextPage () {
      if (this.pageControl.isShowNext) this.page += 1
    }
  },
  computed: {
    rows () {
      const current = this.limitPerPage * (this.page - 1)
      const next = this.limitPerPage * this.page
      return this.dataset.slice(current, next)
    },
    pageControl () {
      const totalPage = Math.ceil(this.dataset.length / this.limitPerPage)
      return {
        totalPage: totalPage,
        isShowPrevious: this.page > 1,
        isShowNext: this.page * this.limitPerPage < this.dataset.length,
        wording: `${this.page}/ ${totalPage}頁，共${this.dataset.length}筆`
      }
    }
  },
  data () {
    return {
      page: 1,
      limitPerPage: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.list-container {
  padding: 10px 15px;
  border: 1px solid $third-grey;
  box-sizing: border-box;
  border-radius: 5px;
}
.row {
  display: flex;
  align-items: center;
  height: 50px;
  &:hover {
    background-color: $third-grey;
  }
}
.col {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  // padding: 16px;
  box-sizing: border-box;
}

.page-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  .control-wrapper {
    display: flex;
    align-items: center;
    .angle-small-icon {
      width: 16px;
      height: 16px;
      cursor: pointer;
      &.left {
        transform: rotate(180deg);
      }
      &.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
    .page-index {
      padding: 2px 5px;
      margin: 0 3px;
      cursor: pointer;
      &.active {
        background-color: $primary-purple;
        color: $primary-white;
        font-weight: 600;
        border-radius: 5px;
      }
    }
  }
}

.no-data-found-wrapper {
  text-align: center;
  padding: 20px;
  .no-data-found-image {
    width: auto;
    height: 400px;
  }
}
</style>
