//index.js
const html2canvas = require('../../libs/js/html2canvas.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../match/match'
    })
  },
  jietu:function(){
    console.log('jietu')
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
