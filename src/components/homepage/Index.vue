<template>
  <div class="home">
    <h1>
      Coding Webpage
    </h1>
    <h3>网站快速成型工具</h3>
    <p>codePage，一套为不懂编程的人准备的静态网页生成工具</p>
    <el-button @click="goEdit" type="primary" round>Play Game<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class HomePage extends Vue {
  mounted() {}
  public goEdit() {
    this.$router.push({path: 'edit'})
  }
}
</script>

<style scoped>
.home{
  height: 100%;
  text-align: center;
  background: #1989fa70;
}
h1{
  padding: 5rem;
  font-size: 4rem;
  color: #fff;
  text-shadow: 0 0 10px #ccc;
}
h3{
  font-size: 2.5rem;
  color: rgba(0,0,0,.5);
}
p{
  margin-top: 2rem;
  font-size: 1.5rem;
  padding: 4rem;
}
.el-button{
  font-size: 1.5rem;
}
</style>
