const express=require('express');
const router=express.Router();
const path=require('path');
const mysql=require('../mysql');
router.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/index/index.html'));
});
router.get('/news',(req,res)=>{
    res.sendFile(path.resolve('./views/index/inform.html'));
});
router.get('/news/:cat_id',(req,res)=>{

    res.sendFile(path.resolve('./views/index/inform.html'));//根据req.param.cat_id,//利用where条件检索
});
router.get('/news/:cat_id/:news_id',(req,res)=>{

    res.sendFile(path.resolve('./views/index/details.html'));//根据req.param.cat_id,//利用where条件检索
});
router.get('/contact',(req,res)=>{
    res.sendFile(path.resolve('./views/index/cooper.html'));
});

router.post('/message', (req, res)=> {
    console.log(req.body);
    mysql.query('insert into intention (name,city,intent,view,type,charge,content,num) values(?,?,?,?,?,?,?,?)',
        [`${req.body.name}`, `${req.body.city}`, `${req.body.intent}`, `${req.body.view}`, `${req.body.type}`, `${req.body.charge}`, `${req.body.content}`, `${req.body.num}`], (err, data) => {
            if (err) {
                res.json('err');
            } else {
                res.json(data.insertId);
            }
        });
});


router.get('/contact/about_us',(req,res)=>{
    mysql.query('select * from about_us',[],(err,data)=>{
        res.json(data);
    })
});
router.get('/culture',(req,res)=>{
    res.sendFile(path.resolve('./views/index/culture.html'));
});
router.get('/product',(req,res)=>{
    res.sendFile(path.resolve('./views/index/productShow.html'));
});
router.get('/product/:cat_id',(req,res)=>{

    res.sendFile(path.resolve('./views/index/productShow.html'));//根据req.param.cat_id,//利用where条件检索
});
router.get('/product/:cat_id/:p_id',(req,res)=>{

    res.sendFile(path.resolve('./views/index/detail.html'));//根据req.param.cat_id,//利用where条件检索
});

router.get('/product/:cat_id/:p_id/all',(req,res)=>{
    mysql.query('select * from designer',[], (err, data)=> {
        res.json(data);
    })
});

module.exports=router;