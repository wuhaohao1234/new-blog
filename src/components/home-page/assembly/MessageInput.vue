<template>
  <div class="messageInput">
    <h2>
      <span v-text="result.message" ></span>
       <el-input v-model="result.userName" ></el-input>
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MessageInput extends Vue {
  @Prop() private result!: any;
  mounted() {
    
  }
}
</script>

<style scoped>

</style>
