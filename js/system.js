$(function () {
    // 文本输入框 高度自适应
    // jquery
    $('#news-content-text').on('input', function (e) {
      $(e.target).css('height', 'auto').css('height', this.scrollHeight + 'px');
      // $(this).css('height', 'auto').css('height', this.scrollHeight + 'px');
    });
    //后台切换
    $(".haidilao-system-menu .new").click(function () {
      $(".haidilao-system-content .news").css("display", "block").siblings().css("display", "none")
      // $(".haidilao-system-content .foods").css("display","none");
    })
    $(".haidilao-system-menu .food").click(function () {
      $(".haidilao-system-content .foods").css("display", "block").siblings().css("display", "none")
      // $(".haidilao-system-content .foods").css("display","block");
    })
      // 用户名填充
      let info = window.localStorage.getItem('info');
      info = JSON.parse(info)
      $('.Adminuser').html(info.email);           
      // 检测是否是最高管理员
      $('.addAmin').click(function(){
          if(info.email == 'newshow@aliyun.com'){
              window.location.href='../system/register.html';
          }else{
              alert('您好像权限不够呢》-《');
          }
      })
  })