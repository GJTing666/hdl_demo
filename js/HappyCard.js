let api = '127.0.0.1:3000';

// $(function () {
    // 验证表单；
    // $(".card-form").validate({
    //   rules: {
    //     cardhao: {
    //       required: true
    //     },
    //     cardword: {
    //      cardword: true,
    //     }
    //   }
    // })
// 将获得数据提交后台

$(".hdl_06").click(function(){
    let cardtext=$(".cardhao").val();
    let cardword=$(".cardword").val();
    let reg=/^[0-9]{13}$/
   
    if(cardtext==""&&cardword==""){
       $.tooltip({
           type:"error",
           content:"请先输入登录用户或密码",
           interval:3000
       })
       console.log(123)
    }else{
        if(reg.test(cardtext)&&cardword==123456){
            
            console.log(cardtext,cardword)
            // cardword=hex_md5(cardword)
            
            // 发起请求
           $.ajax({
                url:api+"/card",
                type:"post",
                data:{
                    cardtext,
                    cardword
                },
                dataType:"json",
                success:function(res){
                    if(res.status == 200){
                        $.tooltip({
                            type: "success",
                            content: "登录成功，"
                          })
                        
                    }else{
                        alert('密码或账户错误，请重试！')
                    }
                }
           })
          
        }else{
            $.tooltip({
                type:"error",
                content:"您输入的账户或密码不正确，请重新输入。",
                interval:3000
            })
            console.log(789)
        }
        
    }
            
    
    

})



