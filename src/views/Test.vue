<template>
  <div class="Test">
    <div class="content">
      <!-- 头部 -->
      <div class="header">
        <span>
          <i class="el-icon-eleme"></i>
          小强
        </span>
      </div>
      <!-- 主体 -->
      <div class="banner">
        <div class="banner_content" ref="bannerContent">
          <div ref="contentScoll" class="contentUser">
            <ul>
              <li v-for="(item , itemKey) in msg" :key="itemKey">
                <div :class="item.user? 'item': 'item item_right'">
                  <i :class="item.user? 'el-icon-eleme': ''"></i>
                  <span class="item_data" v-text="item.date"></span>
                  <span v-for="(itemVal, valKey) in item.value" :key="valKey" class="item_content">
                    <span v-if="itemVal.value">{{itemVal.value}}</span>
                    <a
                      v-if="itemVal.dataUrl"
                      :href="itemVal.dataUrl"
                      target="_blank"
                      v-text="itemVal.dataUrl"
                    ></a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <!-- 滚动条 -->
          <!-- <div class="scrollBar" @mousedown="move"></div> -->
        </div>
      </div>
      <!-- 本人输入框 -->
      <div class="footer">
        <textarea v-model="inputUser" autofocus class="el-input" rows="1"></textarea>
        <el-button @click="putMessage" type="primary">发送</el-button>
      </div>
      <!-- 小强输入框 -->
      <div class="xiaoqiang">
        <h2>小强输入框</h2>
        <textarea v-model="inputXiaoqiang" autofocus class="el-input" rows="1"></textarea>
        <el-button @click="putXiaoqiang" type="primary">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import scoketMessage from "../unit/scoketMessage";
import msg from "../config";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Test extends Vue {
  public inputUser = "";
  public inputXiaoqiang = "";
  public msg: {
    [key: string]: any;
  } = msg;
  public wheelDeltaStyleTop = 0;
  mounted() {
    this.$socket = new WebSocket("ws://localhost:8001");
    const _this = this;
    window.onbeforeunload = function(event) {
      console.log("关闭WebSocket连接！");
      _this.$socket.close();
    };
    this.$socket.onopen = () => {
      console.log("服务以及链接");
    };
    this.$socket.onmessage = (evt: any) => {
      scoketMessage(evt)
        .then(res => {
         this.forEachEle(res)
          return;
        })
        .catch(err => {
          console.log("无文本");
        })
        .then(() => {
          this.$refs.bannerContent.scrollTop = this.$refs.contentScoll.offsetHeight;
        });
    };
  }
  /**
   * putMessage
   */
  public putMessage() {
    this.$socket.send(
      JSON.stringify({
        user: null,
        value: this.inputUser,
        date: ""
      })
    );
    this.inputUser = "";
  }
  public putXiaoqiang() {
    this.$socket.send(
      JSON.stringify({
        user: "xiaoqiang",
        value: this.inputXiaoqiang,
        date: ""
      })
    );
    this.inputXiaoqiang = "";
  }
  /**
   * forEachEle
   */
  public forEachEle(res:any) {
    res.value.forEach((ele: any, key: number) => {
      console.log(ele);
      if (ele.dataUrl) {
        if (ele.dataUrl[0] === "w") ele.dataUrl = "http://" + ele.dataUrl;
      }
    });
    this.msg.push({
      user: res.user,
      value: res.value,
      date: res.date
    });
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
li {
  list-style: none;
  margin: 40px;
  -o-user-select: none;
  -moz-user-select: none; /*火狐 firefox*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10+*/
  -khtml-user-select: none; /*早期的浏览器*/
  user-select: none;
  word-wrap: break-word;
}
li:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.content {
  width: 800px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: 0 0 10px #ccc;
  overflow: hidden;
  padding-bottom: 10px;
}
.header {
  background: #409eff;
  height: 48px;
  color: #fff;
  padding-left: 30px;
  font-size: 16px;
}
.header span {
  color: #fff;
  line-height: 48px;
}
.el-icon-eleme {
  font-size: 30px;
  position: relative;
  top: 5px;
  color: #fff;
}
.banner {
  height: 400px;
  background: rgba(200, 200, 200, 0.7);
  overflow: hidden;
}
.footer {
  background: #fff;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
}
.el-button {
  margin-left: 20px;
}
.el-textarea__inner {
  overflow: hidden;
}

.banner_content {
  position: relative;
  height: 100%;
  /* overflow:scroll; */
  overflow-y: scroll;
  overflow-x: hidden;
}
.contentUser,
.scrollBar {
  position: absolute;
}
.contentUser {
  /* position: absolute; */
  /* bottom: 0; */
  min-height: 100%;
  /* left: 0; */
  width: 100%;
}
.item {
  width: 280px;
  background: rgb(152, 225, 101);
  position: relative;
  border-radius: 10px;
}
.item_right {
  float: right;
}
.item i {
  position: absolute;
  top: 0;
  left: -32px;
}
.item span {
  padding: 12px;
}
.item .item_data {
  /* display: block; */
  color: #eee;
  padding-bottom: 0;
}
.item .item_content {
  display: block;
  padding-top: 8px;
}
.item_content span {
  /* display: block; */
  padding: 0;
}
.scrollBar {
  /* width: 100%; */
  width: 7px;
  top: 20px;
  right: 10px;
  /* height: 200%; */
  height: 100px;

  background: #42b983;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  z-index: 99;
  transition: all 0.5s;
}
.scrollBar:hover {
  opacity: 1;
}
.xiaoqiang {
  position: fixed;
  top: 0;
  left: 0;
}
.xiaoqiang textarea {
  height: 300px;
}
</style>
