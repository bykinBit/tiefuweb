const React = require('react');
const ReactDOM = require('react-dom');
const Common=require('./common.jsx');
const path = require('path');
class Crumbs extends React.Component {
    render() {
        return (
            <div className="slips-jby">
                <a className="slipsin-jby" href={'/'}>首页</a>
                <strong className="sign-jby">></strong>
                <span className="slipsin-jby slipsins">合作加盟</span>
            </div>
        )
    }
}
class Contact extends React.Component {
    render() {
        return (
            <div className="container-jby">
                <div className="topline-jby"></div>
                <div className="containerin-jby">
                    <Crumbs/>
                    <div className="contact-jby">
                        <div className="contacttop">
                            <div className="contactpic">
                                <img src="/index/images/contact-jby.png" alt=""/>
                            </div>
                        </div>
                        <div className="contactbot">
                            <div className="contactdet">
                                <div className="signals-jby">
                                    <img src="/index/images/address-jby.png" alt=""/>
                                </div>
                                <div className="bottom-jby">
                                    <div className="bottomintop-jby">
                                        <span className="address">地址</span>
                                        <em className="line">
                                            <img src="/index/images/line-jby.png" alt=""/>
                                        </em>
                                        <b className="worden">OFFICE &nbsp;ADDRESS</b>
                                    </div>
                                    <div className="bottominbot-jby">
                                        <p className="word">山西 太原 迎泽区 双塔西街 邮电大厦 7层 123室</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contactdet contactdetm">
                                <div className="signals-jby">
                                    <img src="/index/images/email-jby.png" alt=""/>
                                </div>
                                <div className="bottom-jby">
                                    <div className="bottomintop-jby">
                                        <span className="address">地址</span>
                                        <em className="line">
                                            <img src="/index/images/line-jby.png" alt=""/>
                                        </em>
                                        <b className="worden">OFFICE &nbsp;ADDRESS</b>
                                    </div>
                                    <div className="bottominbot-jby">
                                        <p className="word">山西 太原 迎泽区 双塔西街 邮电大厦 7层 123室</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contactdet">
                                <div className="signals-jby">
                                    <img src="/index/images/phone-jby.png" alt=""/>
                                </div>
                                <div className="bottom-jby">
                                    <div className="bottomintop-jby">
                                        <span className="address">地址</span>
                                        <em className="line">
                                            <img src="/index/images/line-jby.png" alt=""/>
                                        </em>
                                        <b className="worden">OFFICE &nbsp;ADDRESS</b>
                                    </div>
                                    <div className="bottominbot-jby">
                                        <p className="word">山西 太原 迎泽区 双塔西街 邮电大厦 7层 123室</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Store extends React.Component {
    render() {
        return (
            <div className="storebox-jby">
                <div className="storein-jby">
                    <div className="storeintop">
                        <img src="/index/images/shop-jby.png" alt=""/>
                    </div>
                    <div className="storeinbot">
                        <div className="storeaddre">
                            <div className="storeaddretop">
                                <p className="word">北京市区门店地址<span>STORE ADDRESS</span></p>
                            </div>
                            <div className="storeaddrebot">
                                <p className="addressdetail">北京市朝阳区北三环东路8号静安中心17层</p>
                                <p className="addressph">400-123-123</p>
                            </div>
                        </div>
                        <div className="storecity">
                            <div className="storecityin">
                                <div className="storedotleft"/>
                                <div className="storename">上海店 SHANGHAI</div>
                                <div className="storedotright"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Intention extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        e.preventDefault();
        var data = {name: this.name.value,city:this.city.value,intent:this.intent.value,view:this.view.value,type:this.type.value,charge:this.charge.value,content:this.content.value,num:this.num.value};
        fetch('/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=> {
            if (data !== 'err') {
                alert('插入成功');
            }
        });
        console.log(data)
    }
    render() {
        return (
            <div className="intention-jby">
                <div className="intentionin-jby">
                    <div className="intentop">
                        <img src="/index/images/message-jby.png" alt=""/>
                    </div>
                    <form method="post">
                        <div className="intenbot">
                            <div className="interface1">
                                <div className="name">
                                    <div className="icon"></div>
                                    <input type="text" ref={(el)=>{this.name=el}} placeholder="如何称呼您 ......" name="name"/>
                                </div>
                                <div className="address">
                                    <div className="icon"></div>
                                    <input type="text" ref={(el)=>{this.city=el}} placeholder="您所在的城市 ......" name="city"/>
                                </div>
                                <div className="want">
                                    <div className="icon"></div>
                                    <input type="text" ref={(el)=>{this.intent=el}} placeholder="您的意向大小 ......" name="intent"/>
                                </div>
                            </div>
                            <div className="interface2">
                                <div className="view">
                                    <div className="icon"></div>
                                    <input type="text" ref={(el)=>{this.view=el}} placeholder="您的视觉取向 ......" name="view"/>
                                </div>
                                <div className="need">
                                    <div className="icon"></div>
                                    <input type="text" ref={(el)=>{this.type=el}} placeholder="您的需求类型 ......" name="type"/>
                                </div>
                                <div className="charge">
                                    <div className="icon"></div>
                                    <input type="text" ref={(el)=>{this.charge=el}} placeholder="您的预算范围 ......" name="charge"/>
                                </div>
                            </div>
                            <div className="interface3">
                                <div className="content">
                                    <div className="der">
                                        <img src="/index/images/der-jby.png" alt=""/>
                                    </div>
                                    <div className="title"></div>
                                    <textarea ref={(el)=>{this.content=el}} name="content" id="" placeholder="您还想了解什么......" />
                                </div>
                                <div className="bottom">
                                    <p className="topbox">您还可以输入<span>400</span>个字</p>
                                    <div className="botbox">
                                        <div className="lefticon">
                                            <img src="/index/images/minphone-jby.png" alt=""/>
                                        </div>
                                        <div className="rightphone">
                                            <input type="text" ref={(el)=>{this.num=el}} placeholder="请输入您的手机号码" name="num"/>
                                        </div>
                                    </div>
                                    <div className="sendbox">
                                        <div className="sendboxin">
                                            <div className="lefticon"></div>
                                            <p className="rightword" onClick={this.submit}>确认发送</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
class Coo extends React.Component {
    render() {
        return (
            <div>
                <div className="coobox-jby">
                    <div className="headerbox-jby">
                        <Common.Nav data={nav}/>
                    </div>
                    <Contact/>
                    <Store/>
                    <Intention/>
                </div>
                <Common.Footer/>
            </div>
        )
    }
}
const nav=[
    {title: '最新资讯',href:'/news'},
    {title: '合作加盟',href:'/contact'},
    {title: '铸铁文化',href:'/culture'},
    {title: '经典铁壶',href:'/product'},
    {title: '铁府首页',href:'/'}
];
ReactDOM.render(<Coo/>, document.getElementById('page'));