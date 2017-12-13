//lists.js
const utils = require('../../utils/util.js')

Page({
  data: {
    pageSize: 12,
    currPage: 1,
    totalPage: 1,
    currLists: [],
    lists:[]
  },
  onLoad: function () {
    var that = this;

    wx.request({
      url: utils.apiHost + '/lists',//获取商品列表
      data: {
        activeTag: 'ljzma'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          lists:res.data,
          currLists: res.data.slice(0, that.data.pageSize)//获取第一页数据
        });
      }
    })
  },
  onReachBottom:function(){//下拉刷新
    var that = this;
    var currPage = that.data.currPage + 1;
    that.setData({
      currPage: currPage,//更新当然页数
      currLists: that.data.lists.slice(0, that.data.pageSize * currPage)//获取当前页数据
    });
  }
})
