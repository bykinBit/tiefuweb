const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
const nav=require('./nav.jsx');
ReactDOM.render(
    <nav.AppNav>
        <div style={{padding:'24px',width:'100%',height:'480px',textAlign:'center',lineHeight:'100%',fontSize:'40px',color:'#424eff',background:'url(/admin/images/apic23565.jpg) no-repeat center center',backgroundSize:'cover'}}>欢迎进入铁府后台管理系统</div>
    </nav.AppNav>
    , document.querySelector('#page'));
