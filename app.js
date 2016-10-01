var express = require('express');
var path = require('path');
//首页路由
var index = require('./routes/index');
//用户路由
var user = require('./routes/user');
//文章路由
var article = require('./routes/article');
var app = express();
//public目录作为静态文件根目录
app.use(express.static(path.join(__dirname,'public')));
//设置模板引擎
app.set('view engine','html');
//设置模板的存放根目录
app.set('views',path.join(__dirname,'views'));
//设置模板的渲染函数
app.engine('html',require('ejs').__express);
//如果请求的路径以下面这个路径开头的话
app.use('/',index);
app.use('/user',user);
app.use('/article',article);
app.listen(9090);