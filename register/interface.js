let query = require('./router/mysql');
let url=require('url');
let path = require('path');
let formidable = require('formidable');
let gps = path.resolve(__dirname, '..');
module.exports = {
    // 查询数据库中新闻
    newsDown(req, res) {
        // 查询数据库数据
        let sql = 'select * from news order by id desc';
        query(sql, function (error, data) {
            if (!error) {
                res.json({
                    status: 200,
                    data: data
                })
            } else {
                res.json({
                    status: 500,
                    data: []
                })
            }
        });


    },
    // 上传新闻到数据库
    newsUp(req, res) {
        // 获取传入的form表单
        let form = new formidable.IncomingForm();
        // 设置图片上传地址
        form.uploadDir = gps + '/img/about';
        // 保留图片后缀
        form.keepExtensions = true;
        // 解析参数
        // fields 除了图片的参数
        // files 上传的img
        form.parse(req, function (error, fields, files) {
            // 将获取的图片写入数据库；  
            let filebase = path.parse(files.img.path).base;
            // 数据填入表单；
            // ?代表MySQL数据所需的东西
            let sql = 'insert into news(title,content,img) values(?)'
            let data = [fields.name, fields.textarea, filebase];
            // 连接数据库
            query(sql, [data]).then(function (result) {
                res.json({
                    status: 200,
                    data: ''
                })
            }).catch(function () {
                res.json({
                    status: 500,
                    data: []
                })
            })
        })
    },
    // 上传数据到数据库
    pushFood(req, res) {
        // 获取传入的form表单
        let form = new formidable.IncomingForm();
        // 设置图片上传地址
        form.uploadDir = gps + '/img/upload';
        // 保留图片后缀
        form.keepExtensions = true;
        // 解析参数
        // fields 除了图片的参数
        // files 上传的img
        form.parse(req, function (error, fields, files) {
            // 将获取的图片写入数据库;
            let filebase = path.parse(files.foodImg.path).base;
            // 数据填入表单；
            // ?代表MySQL数据所需的东西
            let sql = 'insert into shop(name,class,content,img) values(?)'
            let data = [fields.foodName, fields.foodClass, fields.foodArea, filebase];
            // 连接数据库
            query(sql, [data]).then(function (result) {
                res.json({
                    status: 200,
                    data: ''
                })
            }).catch(function () {
                res.json({
                    status: 500,
                    data: []
                })
            })
        })
    },
    // 查询数据库中的商品
    pullFood(req, res) {
        // 查询数据库数据
        let sql = 'select * from shop';
        query(sql, function (error, data) {
            if (!error) {
                res.json({
                    status: 200,
                    data: data
                })
            } else {
                res.json({
                    status: 501,
                    data: []
                })
            }
        });
    },
    // 撤销新闻
    undoNews(req,res){
        let id = req.body.id;
        console.log(id);
        let sql = 'delete from news where id=?';
        let chexiao = query(sql,[id],function(error,data){
            
            if(!error){
                res.json({
                    status:200,
                    data:data
                })
            }else{
                res.json({
                    status:501,
                    data:[]
                })
            }
        });
        if(chexiao){
            res.json({
                status:200,
                message:'删除成功'
            })  
        }
    }
}