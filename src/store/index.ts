import { action, computed, observable } from "mobx";

export default class ViewModel {
  @observable public contetnMsg = {
    value: '个人简历',
    content: [
      {
        type: 'MessageInput',
        result: {
          userName: '阿布',
          message: '姓名：'
        }
      },
      {
        type: 'Personalntroduction',
        result: [
          {
            message: '学校名称',
            value: '某某大学'
          },
          {
            message: '个人博客',
            value: 'wuhaohao1234.github.io'
          },
          {
            message: '联系方式',
            value: '18329723317'
          },
          {
            message: '个人邮箱',
            value: '1611499758@qq.com'
          },
        ]
      },
      {
        type: 'Experience',
        result: [
          {
            label: "1. fcc西安社区官网",
            children: [
              {
                label: "时间：2018年",
                children: [
                  {
                    label: "具体负责内容：负责官网首页banner与content区域开发,并实现移动端适配"
                  }
                ]
              },
            ]
          },
          {
            label: "2. 深圳科科智能有限公司",
            children: [
              {
                label: "时间：2018年",
                children: [
                  {
                    label: "具体负责内容：负责微信小程序开发，修补同事遗留bug，与小程序代码日常维护"
                  }
                ]
              },
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
              },
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
              },
            ]
          },
        ]
      },
      {
        type: 'SkillTree',
        result: [
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
      }
    ]
  }
  @observable public msg: number = 0

  @computed get computedContentMsg() {
    return this.contetnMsg;
  }
  @computed get computedMsg() {
    return this.msg
  }

  @action.bound public setContentMsg() {
  }

  @action.bound public async fetchUsers() { }
}