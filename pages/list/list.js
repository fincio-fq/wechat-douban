

Page({
  data:{
    list:[],
    loading:true,
    title:'loading...'
  },
  onLoad:function(params){
    // 生命周期函数--监听页面加载
    // console.log();
    const apiUrl='https://api.douban.com/v2/movie/'+params.type
     const _this=this
    wx.request({
      url: apiUrl,
      data: {},
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
    
      success: function(res){
        // success
         _this.setData({list:res.data.subjects,title:res.data.title,loading:false})
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
        
      }
    })
   
  }
})