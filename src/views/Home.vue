<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="16">
        <Content :stateData=state />
      </el-col>
      <el-col :span="8">
        <Editore />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ViewModel from "../store/index";
@Component({
  components: {
    Content: () => import("../components/home-page/Content.vue"),
    Editore: () => import("../components/home-page/Editore.vue")
  }
})
export default class Home extends Vue {
  public state = new ViewModel();
  mounted() {}
}
</script>

<style scoped>
.content,.editore {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px #ccc;
}
</style>
