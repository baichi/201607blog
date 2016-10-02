var express = require('express');
var Article = require('../db').Article;
var router = express.Router();
router.get('/add', function (req, res) {
    res.render('article/add',{title:'发表文章'});
});
//保存文章
/**
 * 1. 得到表单的内容，请求体保存到了req.body
 * 2. req.body.createAt = new Date()
 * 3. req.body.user = 当前登录的用户的_id req.session.user._id
 * 4. 取得文章的Model，create方法保存此对象
 * 5. 如果保存失败，跳回发表文章页面继续填写，如果保存失败跳转到首页
 */
router.post('/add',function(req, res){
    var article = req.body;// title content
    article.createAt = new Date();
    //文章的user属性引用用户_id属性
    article.user = req.session.user._id;
    Article.create(article,function(err,doc){
        if(err){
            //返回上一个页面
            res.redirect('back');
        }else {
            res.redirect('/');
        }
    });
});
module.exports = router;