// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChecked: '否'
  },

  isCheck: function (e) {
    if (e.detail.value == '') {
      this.setData({
        isChecked: '否'
      })
    } else {
      this.setData({
        isChecked: e.detail.value
      })
    }
    console.log(e.detail.value);
  }
})