<template>
  <div class="main">
    <div class="topbar bg-dark-1 px-3 py-2 d-flex ai-center">
      <div class="logo">
        <img src="../assets/logo.png" height="30">
      </div>
      <div class="text pl-3 d-flex ai-stretch flex-column jc-between flex-1">
        <div class="title text-white mb-1">王者荣耀</div>
        <div class="desc text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <div class="button">
        <button type="button" class="btn bg-primary">立即下载</button>
      </div>
    </div>
    <div class="nav nav-padding nav-invese jc-around bg-primary text-white pt-3 pb-2">
      <div class="nav-item active">
        <router-link tag="div" class="nav-link" to='/'>首页</router-link>
      </div>
      <div class="nav-item">
        <router-link tag="div" class="nav-link" to='/'>攻略中心</router-link>
      </div>
      <div class="nav-item">
        <router-link tag="div" class="nav-link" to='/'>赛事中心</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="stylus" scoped>
  .topbar
    // position sticky
    // top 0
    z-index 99
    position fixed
    top 0
    left 0
    width 100%
    height 3.5385rem
  .nav-padding
    padding-top 4.6154rem
</style>
