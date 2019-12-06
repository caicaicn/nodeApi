var express = require('express') ;
var bodyParser = require("body-parser"); 
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
var chalk = require('chalk');


app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, jwt-token, X-Token, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');//它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); 
    console.log(chalk.red('请求地址：' + req.protocol + '://' + req.get('host') + req.originalUrl));
    console.log(chalk.yellow('请求api：' + req.originalUrl));
    next();
})

var server = app.listen('8099', ()=>{
    console.log(chalk.green('开启8099端口node服务...'));
});

let router = require("./routes/index")
router(app);

