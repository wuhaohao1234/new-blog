import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 引入element-ui组件
import { 
  Button, 
  Select,
  Row,
  Col,
  Input,
  Form,
  FormItem,
  RadioButton,
  RadioGroup,
  Tree,
  Container,
  Header,
  Main,
  Submenu,
  Tabs,
  TabPane,
} from 'element-ui';
// 引入lodah
import _ from 'lodash'
// 引入localstorage
import { createLocalStorage } from "localstorage-ponyfill";

Vue.prototype._ = _
Vue.prototype.$createLocalStorage = createLocalStorage

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Input.name, Input);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(RadioButton.name, RadioButton);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Tree.name, Tree);
Vue.component(Submenu.name, Submenu);

Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
