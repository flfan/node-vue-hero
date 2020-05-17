<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img class="w-100" src="../assets/images/3f68e30e33a23af8d74b3f334dd210a6.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../assets/images/3f2262d6d3c564a621b385eac3de6152.jpeg">
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../assets/images/ee49f764f4122f73dbe122d3f6e2dcc1.jpeg">
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-home text-right px-3 pb-2" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination-home',
          clickable: true,
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/_variable.styl'
.home >>>
  .swiper-pagination-home
    .swiper-pagination-bullet
      border-radius 0.1538rem
      opacity 1
      background #ffffff
      margin-left 1rem
      &.swiper-pagination-bullet-active
        background $colors.info
</style>