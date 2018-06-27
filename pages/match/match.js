// pages/match/match.js
const app = getApp()
const { resetSize } = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: app.globalData.windowWidth,
    windowHeight: app.globalData.windowWidth * 5 / 3,
    image: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init()
  },

  init:function(){
    const ctx = wx.createCanvasContext('myCanvas')
    this.draw(ctx)
  },

  draw:function(ctx){
    // ctx.setFillStyle('#3f1523')
    // ctx.fillRect(0, 0, this.data.windowWidth,this.data.windowHeight)
    // 初始配置
    const TEAM_WIDTH = resetSize(100)
    const TEAM_HEIGHT = resetSize(60)

    const LINE_WIDTH = resetSize(60)
    const LINE_BORDER = resetSize(2)
    const TEAM_PADDING = resetSize(60)
    const LINE_HEIGHT = TEAM_HEIGHT / 2 + TEAM_PADDING / 2

    const INITIAL_X = resetSize(50)
    const INITIAL_Y = resetSize(50)


    ctx.lineWidth = LINE_BORDER
    ctx.fillStyle = 'black'

    // 队伍1
    ctx.fillRect(INITIAL_X, INITIAL_Y, TEAM_WIDTH, TEAM_HEIGHT)
    // const team1logo = new Image()
    // team1logo.src = 'http://thumb.vpgcdn.com/crop/100x60/13739c5720.png'
    // ctx.drawImage(team1logo, INITIAL_X + 100, INITIAL_Y + 100)
    ctx.beginPath()
    ctx.moveTo(INITIAL_X + TEAM_WIDTH, INITIAL_Y + TEAM_HEIGHT / 2)
    ctx.lineTo(INITIAL_X + TEAM_WIDTH + LINE_WIDTH, INITIAL_Y + TEAM_HEIGHT / 2)
    ctx.lineTo(INITIAL_X + TEAM_WIDTH + LINE_WIDTH, INITIAL_Y + TEAM_HEIGHT / 2 + LINE_HEIGHT)
    ctx.stroke()

    // 队伍2
    ctx.fillRect(INITIAL_X, INITIAL_Y + TEAM_HEIGHT + TEAM_PADDING, TEAM_WIDTH, TEAM_HEIGHT)
    ctx.beginPath()
    ctx.moveTo(INITIAL_X + TEAM_WIDTH, INITIAL_Y + TEAM_PADDING + TEAM_HEIGHT * 1.5)
    ctx.lineTo(INITIAL_X + TEAM_WIDTH + LINE_WIDTH, INITIAL_Y + TEAM_PADDING + TEAM_HEIGHT * 1.5)
    ctx.lineTo(INITIAL_X + TEAM_WIDTH + LINE_WIDTH, INITIAL_Y + TEAM_HEIGHT / 2 + LINE_HEIGHT)
    ctx.stroke()

    ctx.draw(false,()=>{
      // this.convertCanvasToImage()
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
    const _this = this
    wx.showActionSheet({
      itemList: ['保存到相册'],
      success: function (res) {
        console.log(res.tapIndex)
        wx.saveImageToPhotosAlbum({
          filePath: _this.data.image,
          success(res) {
            console.log('chenggong')
          }
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
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