<template>
  <div class="editore">
    <div class="nav">
      <span>添加档案(添加介绍，经历，技能模块)</span>
    </div>
    <div class="message">
      <el-button type="primary">档案1</el-button>
      <el-button type="success">档案2</el-button>
      <el-button type="info">档案3</el-button>
      <el-button type="danger">档案4</el-button>
    </div>
    <div class="nav">
      <span>修改档案信息</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Editore extends Vue {
  mounted() {
    // console.log("这是编辑区域");
  }
}
</script>
<style scoped>
.editore {
  border-radius: 0;
}
.nav {
  height: 35px;
  background: #409eff;
  color: #fff;
  line-height: 35px;
  padding-left: 18px;
}
.message {
  padding: 10px;
  display: flex;
  flex-direction: row;
}
</style>
