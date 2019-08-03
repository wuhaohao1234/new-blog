<template>
  <div class="present">
    <!-- 轮播图 -->
    <div class="content">
      <ul class="wrap" :style="{marginLeft : - this.indexLeft * 50 + 'rem'}" >
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
        <li>内容4</li>
        <li>内容5</li>
      </ul>
    </div>   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Present extends Vue {
  public indexLeft: number = 0
  public timer: any = null
  mounted() {
    if(this.timer) clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.indexLeft ++
      if(this.indexLeft > 4) this.indexLeft = 0
    },500)
    this.$once('hook:beforeDestroy', function () {
      clearInterval(this.timer)
    })
  }
}
</script>

<style scoped>
.present{
  height: 100%;
  text-align: center;
  background: #1989fa70;
  overflow: hidden;
}
li{
  list-style: none;
}
.content {
  width: 50rem;
  margin: 30px auto;
  height: 479px;
  background: #fff;
}
.content .wrap{
  width: 500rem;
  margin-left: 0;
}
.content .wrap li{
  width: 50rem;
  font-size: 3rem;
  line-height: 479px;
  float: left;
}
</style>
