<template>
  <div id="app">
    <vue-header></vue-header>
    <div class="HolyGrail-body">
      <vue-sidebar></vue-sidebar>
      <router-view></router-view>
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import vueHeader from '@/components/Header'
import vueSidebar from '@/components/Sidebar'
import vueFooter from '@/components/footer'

export default {
  name: 'App',
  components: {
    vueHeader,
    vueSidebar,
    vueFooter
  }
}
</script>

<style>
#app {
  display: -webkit-flex; /* Safari */
  display: flex;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
}

.HolyGrail-body {
  display: flex;
  flex: 1;
}
</style>
