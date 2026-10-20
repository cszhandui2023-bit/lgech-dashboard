App({
  onLaunch: function () {
    var info = wx.getSystemInfoSync ? wx.getSystemInfoSync() : {};
    this.globalData.windowWidth = info.windowWidth || 375;
  }
});
