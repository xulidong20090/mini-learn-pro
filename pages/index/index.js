Page({
  /**
   * 页面的初始数据
   */
  data: {
     name:"xuld",
     age:18,
     hobby:[
       {name:"xu1",age:12},
       {name:"xu2",age:13},
       {name:"xu3",age:14},
       {name:"xu4",age:15}
     ],
     index:0
  },

  addIndexNumber:function(){
     this.setData({
      index:this.data.index + 1
     })
  },
  subIndexNumber:function(){
    this.setData({
      index:this.data.index - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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