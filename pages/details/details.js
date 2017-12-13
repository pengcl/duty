//lists.js
const utils = require('../../utils/util.js')

Page({
  data: {
    imgHeights: [],
    prod:{},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    bdw: wx.getSystemInfoSync().windowWidth
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
        
        that.setData({
          prod: res.data
        });
      }
    })
  },
  imageLoad: function (e) {
    //获取图片真实宽高
    var imgWidth = this.data.bdw * 0.5;
    var imgHeight = imgWidth;
    //计算的高度值
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
