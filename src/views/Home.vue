<template>
  <div class="home">
    <el-tabs :tab-position="tabPosition" style="height: 100%;" @tab-click="handleClick" >
      
      <el-tab-pane name=0 label="首页" lazy>
        <HomePage v-if="tabList[0].active" />
      </el-tab-pane>
      <el-tab-pane name=1 label="介绍" lazy>
        <Present v-if="tabList[1].active" />
      </el-tab-pane>
      <el-tab-pane name=2 label="文档" lazy>文档</el-tab-pane>
      <el-tab-pane name=3 label="关于我" lazy>关于我</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HomePage from '../components/homepage/page1/Index.vue'
// import Present from '../components/homepage/page2/Index.vue'
@Component({
  components: {
    HomePage: () => import('../components/homepage/page1/Index.vue'),
    Present:() => import('../components/homepage/page2/Index.vue'),
  }
})
export default class Home extends Vue {
  public tabPosition:string= 'left'
  public tabList = [
    {
      active: true
    },
    {
      active: false
    },
    {
      active: false
    },
    {
      active: false
    },
  ]
  mounted() {}
  public handleClick(tab:any,ele:any) {
    this.tabList.forEach(item => {
      item.active = false
    })
    this.tabList[Number(tab.name)].active = true
  }
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
