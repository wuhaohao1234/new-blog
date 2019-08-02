<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class App extends Vue {
  mounted() {}
  public tabPosition:string= 'left'
  public activeName: string = "first";
  public handleClick(tab: any, event: any) {}
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  /* background: rgba(33, 247, 13, 0.336); */
}
.content {
  height: 100%;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
