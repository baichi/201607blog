var express = require('express');
var path = require('path');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();
//设置模板引擎
app.set('view engine','html');
//设置模板的存放根目录
app.set('views',__dirname);
//设置模板的渲染函数
app.engine('html',require('ejs').__express);
app.use(express.static(path.join(__dirname,'uploads')));
app.get('/',function(req,res){
    res.sendFile('./index.html',{root:__dirname});
});
app.post('/post',upload.single('avatar'),function(req,res){
   console.log(req.body);
   console.log(req.file);
   res.render('show',{avatar:req.file.filename});
});
app.listen(9090);