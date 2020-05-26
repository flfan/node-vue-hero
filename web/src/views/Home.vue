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
    <!-- swiper end -->
    <div class="nav-icons bg-white mt-3 pt-3 text-center">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3 text-grey" v-for="i in 10" :key="i">
          <i class="sprite sprite-news"></i>
          <div class="text py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-right py-2 fs-sm">
        <i class="sprite sprite-arrow"></i>
        <span class="ml-2">收起</span>
      </div>
    </div>
    <!-- nav icons end -->
    <m-list-card title="新闻资讯" icon="news" :categories="Categories">
      <template #items="{category}">
        <div class="news-item py-2 fs-lg d-flex" v-for="(item, index) in category.newsList" :key="index">
          <span class="text-info">[{{item.categoryName}}]</span>
          <span class="mx-2">|</span>
          <span class="flex-1 text-ellipsis pr-3">{{item.title}}</span>
          <span class="text-grey">{{item.createdAt | date}}</span>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
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
      },
      Categories: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('/news/list')
      this.Categories = res.data
      // console.log(this.Categories)
    }
  },
  created() {
    this.fetch()
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
.nav-icons
  border-top 1px solid $border-color
  border-bottom 1px solid $border-color
  .nav-item
    width 25%
    border-right 1px solid $border-color
    &:nth-child(4n)
      border none

</style>