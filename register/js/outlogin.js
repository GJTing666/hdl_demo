// 退出登陆
// let api = "http://192.168.97.220:3000";
$(function(){
    let token= window.localStorage.getItem('token');
    // 没有登陆
    if (!token) {
        window.location.href = '../system/login.html';
        return false;
    }
    // 验证登陆
    $.ajax({
        url: api + '/verfiy',
        type: 'get',
        data: {
            token
        },
        dataType: 'json',
        success: function (res) {
            if (res.status != 512) {
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('info');
                window.location.href = '../system/login.html';
            }else if(res.status !== 200){
                alert('请重新登陆')
            }
        }
    })
    // 退出登陆
    $(".outlogin").click(function(){
       let info = window.localStorage.getItem('info');
       info = JSON.parse(info);
       $.ajax({
           url:api+'/outlogin',
           type:'post',
           data:{
               email:info.email
           },
           dataType:'json',
           success:function(res){
                if(res.status == 200){
                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('info');
                    window.location.href = '../index.html';
                }else if(res.status !=200){
                    alert('退出失败，请重试！')
                }
           }
       })
    })
})