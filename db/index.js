var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
//连接数据库
mongoose.connect('mongodb://localhost:27017/201607blog');
//定义schema 规定了用户集合的文档的属性名和类型
// 文档的_id ObjectId 主键
var UserSchema = new mongoose.Schema({
    username:String,//用户名
    password:String,//密码
    avatar:String,//头像
    email:String//邮箱
});
//定义Model
exports.User = mongoose.model('User',UserSchema);

var ArticleSchema = new mongoose.Schema({
    title:String,//文章标题
    content:String,//正文
    user:{type:ObjectId,ref:'User'},//外人的主键-外键
    createAt:Date//发表时间
});
exports.Article = mongoose.model('Article',ArticleSchema);




