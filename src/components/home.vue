<template>
  <div class='page-home'>
    <div class="page-tabs">
      <div class="page-tab">
        <tabs id="tabs-id" type="boxed" :is-full-width="false" alignment="left" size="middle">
          <tab-item id="tab-item-id" label="Feed物料">
            <div class="xxxxxxx">
            </div>

          </tab-item>
          <tab-item label="落地页"></tab-item>
          <tab-item label="其他"></tab-item>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueBlu from 'vue-blu'
import '../scss/aaa.scss'
// import '../../node_modules/vue-blu/src/scss/blu.scss'

Vue.use(VueBlu)

export default {
}
</script>

<style lang="css" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  flex: 0.9;
  /*background: #FFFFFF;*/
  background: green;
  order: 1;
}

#tabs-id {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: brown;
}

#tab-item-id {
  display: flex;
  flex-direction: column;
  height: 10000px;
  background: grey;
}

.page-tabs {
  display: flex;
  flex-direction: column;
  background: yellow;
  flex: 1;
}

.xxxxxxx{
  display: flex;
  flex-direction: column;
  background: red;
  flex: 1;
}

.home-title {
  text-align: center;
  color: black;
  font-family: "Arial";
  position: relative;
}

.toggle {
  background-color: #0a0a0a;
}

.page-tabs {
  margin-top: 15px;
  margin-left: 20px;
}
</style>
