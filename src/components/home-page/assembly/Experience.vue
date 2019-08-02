<template>
  <div class="experience">
    <h2>项目经历：</h2>
    <el-tree :data="result" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Experience extends Vue {
  @Prop() private result!: any;
  public defaultProps = {
    children: "children",
    label: "label"
  };
  public data = [
    {
      label: "1. fcc西安社区官网",
      children: [
        {
          label: "时间：2018年",
          children: [
            {
              label:
                "具体负责内容：负责官网首页banner与content区域开发,并实现移动端适配"
            }
          ]
        }
      ]
    },
    {
      label: "2. 深圳科科智能有限公司",
      children: [
        {
          label: "时间：2018年",
          children: [
            {
              label:
                "具体负责内容：负责微信小程序开发，修补同事遗留bug，与小程序代码日常维护"
            }
          ]
        }
      ]
    },
    {
      label: "3. 西安恒瑞科技有限公司",
      children: [
        {
          label: "时间：2017年",
          children: [
            {
              label: "具体负责内容：负责讲解html,css课程，并指导学生完成作业"
            }
          ]
        }
      ]
    },
    {
      label: "4. 悦泰科技有限公司",
      children: [
        {
          label: "时间：2019年",
          children: [
            {
              label: "具体负责内容：负责负责西宁数据池项目开发"
            }
          ]
        }
      ]
    }
  ];
  public handleNodeClick(data: any) {
    // console.log(data);
  }
  mounted() {
    // console.log("这是项目经历");
    console.log(this.result)
  }
}
</script>

<style scoped>
h2 {
  padding-bottom: 20px;
}
</style>
