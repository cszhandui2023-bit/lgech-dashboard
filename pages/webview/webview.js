var HUB_URL = "https://cszhandui2023-bit.github.io/lgech-dashboard/";

Page({
  data: { url: HUB_URL },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: "LGECH Dashboard" });
  },
  onShareAppMessage: function () {
    return {
      title: "LGECH Dashboard Hub",
      path: "/pages/webview/webview"
    };
  },
  onError: function () {
    wx.showModal({
      title: "看板暂时无法打开",
      content: "请确认域名已加入小程序业务域名。",
      showCancel: false
    });
  }
});
