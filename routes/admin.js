const express=require('express');
const path=require('path');
const router=express.Router();
const mysql = require('../mysql');
router.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/admin.html'));
});
router.get('/iron_pot',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/iron_pot.html'));
});
router.get('/message',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/message.html'));
});
router.get('/update',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/update.html'));
});
router.get('/news',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/news.html'));
});
router.get('/designer',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/designer.html'));
});
router.get('/about_us',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/about_us.html'));
});

// 获取留言
router.get('/message/all', (req, res)=> {
    mysql.query('select * from intention', (err, data)=> {
        res.json(data);
    })
});
// 留言删除
router.get('/message/delete/:id', (req, res)=> {
    console.log(req);
    mysql.query('delete from intention where id = ?',
        [req.params.id], function (err, data) {
            if (!err) {
                res.redirect('/admin/message');
            }
        })
});

module.exports=router;
//npm install forever -g可以自动重启服务，不必要手动启动