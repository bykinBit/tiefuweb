const express=require('express');
const path=require('path');
const app=express();
const bodyParser=require('body-parser');
const adminRouter=require('./routes/admin');
const indexRouter=require('./routes/index');
const loginRouter=require('./routes/login');
const session=require('express-session');
const compression=require('compression');
app.use(compression());
const cookiePaser=require('cookie-parser');
app.use(cookiePaser());
app.use(express.static(path.resolve(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use('/',indexRouter);
app.use('/login',loginRouter);
app.use('/admin',function(req,res,next){//中间件
    if(req.session.login==='login'){
        next();
    }else{
        res.redirect('/login');
    }
});
app.use('/admin',adminRouter);
app.listen(8003,()=>{
    console.log('服务器已经启动');
});
process.on('uncaughtException',(ex)=>{
    console.log(ex);
});
