var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost:27017/201607blog');
//定义schema 规定了用户集合的文档的属性名和类型
var UserSchema = new mongoose.Schema({
    username:String,//用户名
    password:String,//密码
    email:String//邮箱
});
//定义Model
exports.User = mongoose.model('User',UserSchema);



