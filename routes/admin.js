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
router.get('/about_us/all',(req,res)=>{
    mysql.query('select * from about_us',[],(err,result)=>{
       res.json(result);
    });
});
router.post('/about_us/update',(req,res)=>{
    console.log(req.body);
        mysql.query('update about_us set phone=?,email=?,address=? where id=?',[req.body.phone,req.body.email,req.body.address,req.body.id],(err,result)=>{
            res.json('ok');
        });
});
router.post('/about_us/add',(req,res)=>{
    console.log(req.body);
    mysql.query("insert into about_us (id,email,phone,address) values (null,'111854498@163.com','1225497879','London, Park Lane no. 2')",[],(err,result)=>{
        res.json('ok');
    });
});
router.get('/about_us/delete/:id',(req,res)=>{
    mysql.query("delete from about_us where id=?",[req.params.id],(err,result)=>{
        res.redirect('/admin/about_us');
    });
});

// 设计师
router.get('/designer/all', (req, res)=> {
    mysql.query('select * from designer', (err, data)=> {
        res.json(data);
    })
});
router.post('/designer/add', (req, res)=> {
    mysql.query("INSERT INTO `designer` (`id`, `name`, `describe`, `img`) VALUES (NULL, '', '', '')",[],(err,result)=>{
        res.json(result);
    })
});
router.post('/designer/update', (req,res)=> {
    mysql.query("UPDATE designer SET `name` = ?, `describe` = ? WHERE `id` = ?",[req.body.name,req.body.describe,req.body.id], (err, data)=> {
        res.json(data);
    })
});
router.get('/designer/list/delete/:id', (req, res)=> {
    mysql.query('delete from designer where id = ?',
        [req.params.id], function (err, data) {
            if (!err) {
                res.redirect('/admin/designer/list');
            }
        })
})
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
