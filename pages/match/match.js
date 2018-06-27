// pages/match/match.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: null,
    windowHeight: null,
    image: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init()
  },

  init:function(){
    try {
      var res = wx.getSystemInfoSync()
      this.setData({
        windowWidth: res.windowWidth * res.pixelRatio,
        windowHeight: res.windowWidth * res.pixelRatio * 5 / 3
      })
    } catch (e) {
      console.log(e)
    }
    const ctx = wx.createCanvasContext('myCanvas')
    this.draw(ctx)
  },

  draw:function(ctx){
    ctx.setFillStyle('#3f1523')
    ctx.fillRect(0, 0, this.data.windowWidth,this.data.windowHeight)
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 75)
    ctx.fillRect(100, 100, 150, 75)
    ctx.fillRect(100, 300, 150, 75)
    ctx.draw(false,()=>{
      this.convertCanvasToImage()
    })
  },

  convertCanvasToImage:function(){
    console.log('convertCanvasToImage')
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: this.data.windowWidth,
      height: this.data.windowHeight,
      destWidth: this.data.windowWidth,
      destHeight: this.data.windowHeight,
      fileType: 'jpg',
      canvasId: 'myCanvas',
      success:  res=> {
        console.log(res.tempFilePath)
        this.setData({
          image: res.tempFilePath
        })
      }
    })
  },

  saveImage: function () {
    wx.saveImageToPhotosAlbum({
      filePath:this.data.image,
      success(res) {
        console.log('chenggong')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})