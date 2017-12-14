//lists.js
const utils = require('../../utils/util.js');
const exhibitionHall = require('../../data/data.js');

Page({
  data: {
    exhibitionHalls: [],
    citys: exhibitionHall.CITY,
    exhibitionHall:{},
    city:{},
    pickerShow:false,
    index: 0,
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
    that.setData({
      exhibitionHalls: exhibitionHall.EXHIBITIONHALL[this.data.citys[0].tag]
    });
    console.log(that.data.exhibitionHalls);
    wx.request({
      url: utils.apiHost + '/lists/' + options.productId,//获取商品列表
      data: {
        activeTag: 'ljzma'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
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
  bindChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      city: this.data.citys[e.detail.value[0]]
    });
    this.setData({
      citys: this.data.exhibitionHalls[this.data.citys[e.detail.value[0]].tag]
    })
    console.log(this.data.citys);
  },
  picker:function(e){
    this.setData({
      pickerShow: true
    });
  }
})
