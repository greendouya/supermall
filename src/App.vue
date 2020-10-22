<template>
  <main-tab-bar></main-tab-bar>
  <router-view></router-view>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue"

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
