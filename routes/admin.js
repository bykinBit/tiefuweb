const express=require('express');
const path=require('path');
const router=express.Router();
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
module.exports=router;
//npm install forever -g可以自动重启服务，不必要手动启动