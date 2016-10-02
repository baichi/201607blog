var express = require('express');
//如果加载的是一个文件夹，那么会自动加载文件夹下面的index.js模块
var User = require('../db').User;
//调用express Router方法可以得到一个路径的实例,它是一个路由的容器
var router = express.Router();
//真正客户端请求的url=路由前缀+此处配置的路由路径
// /user/signup   /user/signup
router.get('/signup', function (req, res) {
    res.render('user/signup', {title: '注册'});
});
//处理客户端提交过来的post请求
router.post('/signup', function (req, res) {
    //这个请求体对象的属性和表单里的输入组件的name属性一一对应
    var user = req.body;//{username:'admin',password:'admin',email:'83687401@qq.com'}
    User.create(user, function (err, doc) {
        if (err) {
            res.send(err);
        } else {
            //把保存成功之后的用户对象赋给会话对象的user属性
            req.session.user = doc;
            //注册成功之后会返回首页
            res.redirect('/');
        }
    })
});
router.get('/signin', function (req, res) {
    res.render('user/signin', {title: '登录'});
});
//提交登录表单
/**
 *1.得到请求体对象，也就是序列化的表单对象转成的JS对象 bodyParser
 *2.以此对象作为条件，使用User模型对象到数据库中进行查询看是否有符合条件的用户。
 * 如果有，则登录成功，把此用户写到session中，如果没有，登录失败，返回登录页，让用户继续登录。
 */
router.post('/signin', function (req, res) {
    var user = req.body;
    User.findOne(user, function (err, doc) {
        if (err) {
            return res.redirect('/user/signin');//end
        } else {
            if(doc){
                req.session.user = doc;
                res.render('success',{title:'成功页'});
            }else{
                return res.redirect('/user/signin');
            }
        }
    })
});

router.get('/signout', function (req, res) {
    res.redirect('/');
});
module.exports = router;