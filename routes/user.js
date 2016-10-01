var express = require('express');
//如果加载的是一个文件夹，那么会自动加载文件夹下面的index.js模块
var User = require('../db').User;
//调用express Router方法可以得到一个路径的实例,它是一个路由的容器
var router = express.Router();
//真正客户端请求的url=路由前缀+此处配置的路由路径
// /user/signup   /user/signup
router.get('/signup',function(req,res){
    res.render('user/signup',{title:'注册'});
});
//处理客户端提交过来的post请求
router.post('/signup',function(req,res){
  //这个请求体对象的属性和表单里的输入组件的name属性一一对应
  var user = req.body;//{username:'admin',password:'admin',email:'83687401@qq.com'}
  User.create(user,function(err,doc){
      if(err){
          res.send(err);
      }else{
          res.send(doc);
      }
  })
});
router.get('/signin',function(req,res){
    res.render('user/signin',{title:'登录'});
});
router.get('/signout',function(req,res){
    res.redirect('/');
});
module.exports = router;