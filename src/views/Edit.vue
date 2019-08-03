<template>
  <div class="edit">
    <el-row>
      <el-col :span="4">
        <div class="content">
          <Model/>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    Model: () => import('../components/editor/model/Index.vue')
  }
})
export default class Home extends Vue {}
</script>
<style scoped>
.edit,.el-col,.el-row{
  height: 100%;
  padding: .5rem;
  box-sizing: border-box;
}
.content{
  height: 100%;
  border-radius: 10px;
  background: rgba(222, 222, 222, 0.1);
  box-shadow: 0 0 10px #ccc;
}
</style>
