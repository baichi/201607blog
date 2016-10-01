var express = require('express');
var user = require('./routes/user');
var app = express();
//如果请求的路径以下面这个路径开头的话
app.use('/user',user);


app.get('/article/add',function(req,res){
    res.send('发表文章');
});
app.listen(9090);