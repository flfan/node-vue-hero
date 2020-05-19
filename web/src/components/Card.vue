<template>
  <div>
    <div class="card mt-3 bg-white p-3">
      <div class="card-header d-flex pb-3">
        <div class="iconfont fs-xl" :class="`icon-${icon}`"></div>
        <div class="title flex-1 fs-xl ml-2">{{title}}</div>
        <div class="iconfont icon-more1 fs-xl"></div>
      </div>
      <div class="card-body pt-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/style/_variable.styl'

.card
  border-bottom 1px solid $border-color
  .card-header
    border-bottom 1px solid $border-color
</style>