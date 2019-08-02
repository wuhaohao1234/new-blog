declare module '*.vue' {
  import Vue from 'vue';
  module "vue/types/vue" {
    interface Vue {
      _: any
      $createLocalStorage: any,
      $socket: any,
      scroll: any
      loadData: any
    }
  }
  export default Vue;
}
