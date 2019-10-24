// 启动服务器
let express=require('express');
let app=express();
let bodyParser= require('body-parser');
// 当前绝对地址上一级；
let path = require('path');
let gps=path.resolve(__dirname, '..');
// appliction/json
let jsonParser=bodyParser.json();
// application/x-ww-form-urlencoded
let lencodedParser=bodyParser.urlencoded({extended:false});

// 启动静态服务器 若同名由上到下访问
// app.use(express.static(__dirname));
app.use(express.static(gps));
app.use(express.static('../img/upload'));
let router = require('./router');
/*跨域 */
app.all('*',function(request,response,next){
    response.header('Access-Control-Allow-Origin','*');
    next();
})
// 获取消息列表
app.get('/code',router.getCode);
// 注册
app.post('/register',lencodedParser,router.Register);
// 登陆
app.post('/login',lencodedParser,router.Login);
// 验证是否登陆
app.post('/verfiy',lencodedParser,router.Verfiy);
// 退出登陆
app.post('/outlogin',lencodedParser,router.outLogin);
// 监听
// 获取信息
// 接口回调 汇总
let code=require('./interface');
// 新闻
// 使用get请求监听接口
app.get('/newsdown',code.newsDown);
// 传入新闻信息到后台
app.post('/newsup',lencodedParser,code.newsUp);
// 撤销新闻
app.post('/undoNews',lencodedParser,code.undoNews);
// 添加食物商品到后台
app.post('/pushfood',lencodedParser,code.pushFood);
app.post('/pullfood',lencodedParser,code.pullFood);
// 监听
app.listen(3000,"192.168.97.220");