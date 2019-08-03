<template>
  <div class="model">
    <ul>
      <li>
        <el-button type="primary" @click="open()">添加页面组件</el-button>
      </li>
      <li>
        <el-button>编辑当前组件</el-button>
      </li>
      <li>
        <el-button type="danger">删除当前组件</el-button>
      </li>
      <li>
        <el-button type="success" @click="saveComponent()">保存页面</el-button>
      </li>
      <li>
        <el-button type="warning">回到首页</el-button>
      </li>
    </ul>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class Model extends Vue {
  public centerDialogVisible: boolean = false;
  /**
   * saveComponent
   */
  public saveComponent() {
    this.$Message({
      message: "保存成功",
      type: "success"
    });
  }
  /**
   * open
   */
  public open() {
      
  }
}
</script>
<style scoped>
.model {
  height: 100%;
}
li {
  line-height: 4rem;
  text-align: center;
  list-style: none;
}
.el-button {
  width: 80%;
}
</style>