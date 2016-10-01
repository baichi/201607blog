var express = require('express');
//调用express Router方法可以得到一个路径的实例,它是一个路由的容器
var router = express.Router();
//真正客户端请求的url=路由前缀+此处配置的路由路径
// /user/signup   /user/signup
router.get('/signup',function(req,res){
    res.send('注册');
});
router.get('/signin',function(req,res){
    res.send('登录');
});
router.get('/signout',function(req,res){
    res.send('退出');
});
module.exports = router;