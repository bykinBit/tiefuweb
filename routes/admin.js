const express=require('express');
const path=require('path');
const fs=require('fs');
const mysql=require('../mysql.js');
const multer=require('multer');
const upload=multer({dest:'uploads/'});
const async=require('async');
const router=express.Router();
router.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/admin.html'));
});
router.get('/out',(req,res)=>{
    req.session.login=null;
    res.clearCookie('hash',{path:'/'});
    res.redirect('/login');
});
router.post('/txt',upload.single('wangEditorH5File'),(req,res)=>{
    var o=fs.createWriteStream(path.resolve('public/admin/images/'+req.file.originalname));
    fs.createReadStream(path.resolve(req.file.path)).pipe(o);
    o.on('finish',function(){
        fs.unlink(path.resolve(req.file.path))
    });
    res.end('/admin/images/'+req.file.originalname);
});
router.get('/products/list',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/iron_pot.html'));
});
router.get('/message',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/message.html'));
});
router.get('/user/add',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/update.html'));
});
router.get('/news/list',(req,res)=>{
    res.sendFile(path.resolve('./views/admin/news.html'));
});
router.get('/designer/list',(req,res)=>{
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
