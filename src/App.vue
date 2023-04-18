<template>
  <Header/>

  <router-view v-slot="{Component}">
    <transition name="slide-fade" mode="out-in">
      <div :key="$route.path">
        <component :is="Component"/>
      </div>
    </transition>
  </router-view>

  <Footer/>
</template>

<script>
// Include
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Sapet Arnaud - Portfolio';
      }
    },
  },
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="css" src="./css/common.css" />
