SkillTree.vue
<template>
  <div class="skillTree">
    <h2>技能树：</h2>
    <ul>
        <li class="list" v-for="(skillList, keys) in skillData" :key="keys" >
            <span v-text="skillList.value" ></span>
            <ul v-for="(skillItem , itemKey) in skillList.tree" :key="itemKey" >
                <li v-text="skillItem.value" ></li>
            </ul>
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SkillTree extends Vue {
 public skillData = [
     {
         value: '前端语言基础',
         tree: [
             {
                 value: 'html,css,javascript,es6,typescript'
             }
         ]
     },
     {
         value: '主流框架',
         tree: [
             {
                 value: 'vue：80%，react：50%，angular：20%'
             }
         ]
     },
     {
         value: '脚手架',
         tree: [
             {
                 value: 'webpack,babel,gulp'
             }
         ]
     },
     {
         value: 'UI框架：',
         tree: [
             {
                 value: 'bootstrap,vuetify,v-admin,element-ui'
             }
         ]
     },
     {
         value: '基本功：',
         tree: [
             {
                 value: '23种设计模式，函数式编程，面向对象编程，数据结构'
             }
         ]
     },
     {
         value: '后端：',
         tree: [
             {
                 value: 'nodeJs,mySql,mongodb,python,go'
             }
         ]
     },
 ]
  mounted() {
    // console.log("这是技能树");
  }
}
</script>

<style scoped>
ul {
    padding-left: 30px;
}
h2 {
  padding-bottom: 20px;
}
.list {
    color: #999;
    line-height: 36px;
    opacity: .7;
    font-size: 16px;
    transition: .3s all;
    cursor: pointer;
}
.list:hover{
    opacity: 1;
    font-size: 18px;
}
.list span{
    color: #333;
    font-weight: bold;
}
.list ul{
    margin-left: 10px;
}
</style>
