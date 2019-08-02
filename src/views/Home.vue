<template>
  <div class="home">
    Home
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ViewModel from "../store/index";
@Component({})
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
