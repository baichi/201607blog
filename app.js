var express = require('express');
//首页路由
var index = require('./routes/index');
//用户路由
var user = require('./routes/user');
//文章路由
var article = require('./routes/article');
var app = express();
//如果请求的路径以下面这个路径开头的话
app.use('/',index);
app.use('/user',user);
app.use('/article',article);
app.listen(9090);