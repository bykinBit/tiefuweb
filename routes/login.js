const express=require('express');
const path=require('path');
const router=express.Router();
const crypto=require('crypto');
const mysql=require('../mysql');
router.get('/',(req,res)=>{
    if(!req.cookies.hash){
        res.sendFile(path.resolve('./views/admin/login.html'));
        return;
    }
    mysql.query('select * from admin where hash=?',[req.cookies.hash],function(err,result){
        if(result.length===0){
            res.sendFile(path.resolve('./views/admin/login.html'));
        }else{
            req.session.login='login';
            req.redirect('/admin');
        }
    })
});
router.post('/check',(req,res)=>{
    console.log(req.body);
    var hash=crypto.createHash('md5');
    hash.update(req.body.password);
    var x=hash.digest('hex');
   mysql.query('select * from admin where account=?',[req.body.userName],function (err,result) {
       console.log(result);
       if(result.length===0){
           res.redirect('/login');
       }else{
           if(result[0].password===x){
               req.session.login='login';
               if(req.body.remember==='true'){
                   res.cookie('hash',result[0].hash,{path:'/',expires:new Date(Date.now()+90000)});
               }
               res.json('ok');
           }else{
               res.redirect('/login')
           }
       }
   });
});
module.exports=router;