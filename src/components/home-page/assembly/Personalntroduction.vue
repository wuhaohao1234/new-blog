<template>
  <div class="personalntroduction">
    <h2>个人介绍：</h2>
    <div class="context" >
      <h4 v-for="(item,keys) in result" :key="keys" >
        <span v-text="item.message" ></span>
        <el-input v-model="item.value" ></el-input>
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Personalntroduction extends Vue {
  @Prop() private result!: any;
  mounted() {
    
  }
}
</script>

<style scoped>
h2 {
  padding-bottom: 20px;
}
h4 {
  line-height: 40px;
  margin-bottom: 15px;
}
</style>
