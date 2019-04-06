// pages/index/index.js
const appInstance = getApp()
var clickCount_1 = 0, clickCount_2 = 0 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textclickone: 'hello world，这里是点我1',
    textclicktwo: 'hello world，这里是点我2',
  },

  /** 按钮1触发事件处理**/
  clickme1: function (event) {
    console.log('1点我')
    clickCount_1++
    this.setData({
      textclickone: '点我1点击了' + clickCount_1 + '次.'
    })
  },
  /** 按钮2触发事件处理**/
  clickme2: function (event) {
    console.log('点我2')
    clickCount_2++
    this.setData({
      textclicktwo: '点我2点击了' + clickCount_2 + '次.'
    })
  }

})