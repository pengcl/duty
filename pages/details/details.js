//lists.js
const utils = require('../../utils/util.js')

Page({
  data: {
    imgUrls: [],
    prod:{},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  onLoad: function (options) {
    var that = this;
    console.log(options.productId);
    wx.request({
      url: utils.apiHost + '/lists/' + options.productId,//获取商品列表
      data: {
        activeTag: 'ljzma'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        var imgUrls = [];
        for (var i = 0; i < data.phoneTypes[0].mediaProductList.length; i++) {
          $scope.imgUrls.push("http://www.yfq.cn:8899/fileserver/medias/" + data.phoneTypes[0].mediaProductList[i].mediaUrl);
        }
        that.setData({
          prod: res.data
        });
      }
    })
  },
  onReachBottom: function () {//下拉刷新
    var that = this;
    var currPage = that.data.currPage + 1;
    that.setData({
      currPage: currPage,//更新当然页数
      currLists: that.data.lists.slice(0, that.data.pageSize * currPage)//获取当前页数据
    });
  }
})
