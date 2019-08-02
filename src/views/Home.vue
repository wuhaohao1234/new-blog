<template>
  <div class="home">
    <el-tabs :tab-position="tabPosition" style="height: 100%;">
      <el-tab-pane label="首页" lazy>
        <HomePage/>
      </el-tab-pane>
      <el-tab-pane label="介绍" lazy>
        2132
      </el-tab-pane>
      <el-tab-pane label="文档" lazy>文档</el-tab-pane>
      <el-tab-pane label="关于我" lazy>关于我</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePage from '../components/homepage/Index.vue'
@Component({
  components: {
    HomePage
  }
})
export default class Home extends Vue {
  public tabPosition:string= 'left'
  mounted() {}
}
</script>

<style scope >
.home{
  height: 100%;
}
.el-tabs--left .el-tabs__header.is-left{
  margin-right: 0;
}
.el-tabs__content,.el-tab-pane {
  height: 100%;
}
</style>
