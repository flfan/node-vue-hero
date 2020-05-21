<template>
  <div class="home">
    <m-card :title="title" :icon="icon">
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{active: active === index}"
          @click="$refs.list.$swiper.slideTo(index)"
          v-for="(category, index) in categories" :key="index">{{category.name}}</div>
      </div>
      <div class="container pt-3">
        <swiper ref="list"
        @slideChange="() => active = $refs.list.$swiper.realIndex">
          <swiper-slide v-for="(category, index) in categories" :key="index">
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>
  </div>
</template>

<script>

export default {
  props: {
    icon: {type: String, required: true},
    title: {type: String, required: true},
    categories: {type: Array, required: true}
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    handleClick(i) {
      this.$refs.list.$swiper.slideTo(i)
      // console.log(this.$refs.list)
    }
  }
}
</script>
