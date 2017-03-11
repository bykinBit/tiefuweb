const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
const common=require('./common.jsx');
class Pages extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:2
        }
    }
    render(){
        var Pages=this.props.page.map((v,i)=><div key={i}>< a href=" " className="d_ling_hui" onClick={()=>{this.setState({num:i})}} style={{background:(i===this.state.num)?'red':'#fff'}}>
            <span style={{color:(i===this.state.num)?'#fff':'#aeaeae'}}>{v.id}</span>
        </ a>
            <div className="d_line" style={{display:(i===5)?'none':'block'}}></div>
        </div>);
        return(
            <div className="d_pages">
                <div className="d_page">
                    < a href="">
                        < img src="/index/images/18_w.jpg" alt=""/>
                    </ a>
                    < img  style={{marginTop:8}} src="/index/images/19_w.jpg" alt=""/>
                    {Pages}
                    < img  style={{marginTop:8}} src="/index/images/20_w.jpg" alt=""/>
                    < a href="" >
                        < img style={{marginTop:6}} src="/index/images/21_w.jpg" alt=""/>
                    </ a>
                </div>
                <div className="d_First_page">
                    <div className="d_first">
                        <ul className="d_together">共10页</ul>
                        <ul className="d_other_page">
                            <span>到</span>
                            <a><input type="text"/></ a>
                            <span>页</span>
                        </ul>
                        <ul ><a className="d_go" href="">GO</ a></ul>
                    </div>
                </div>
            </div>

        )
    }
}
const page=[
    {id:'01'},
    {id:'02'},
    {id:'03'},
    {id:'....'},
    {id:'05'},
    {id:'06'},
];
class ProductShow extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="kong">
                    <common.Nav data={nav}/>
                </div>
                <div className="product">
                    <div className="top_bxb">
                        <div className="redline"></div>
                        <div className="rom"></div>
                    </div>
                    <div className="content">
                        <div className="mianbao">
                            <span>
                                <a href={`/`}>首页</a>>经典铁壶</span>
                        </div>
                        <div className="nav">
                            <common.Sidenav sidenav={sidenav} news={news}/>
                        </div>
                        <div className="show">
                            <div className="title"></div>
                            <div className="listbox">
                                <ul>{this.props.data.map((v,i)=>
                                    <a href={`${v.href}`}>
                                        <li className="item" key={i}>
                                            <div className="border_w">
                                                <div className="borderLeft1">
                                                    <div className="yuan"></div>
                                                </div>

                                                <div className="borderLeft2">
                                                    <div className="yuan"></div>
                                                </div>
                                                <div className="borderLeft3">
                                                    <div className="yuan"></div>
                                                </div>
                                                <div className="borderLeft4">
                                                    <div className="yuan"></div>
                                                </div>
                                                <div className="borderRight1">
                                                    <div className="yuan"></div>
                                                </div>
                                                <div className="borderRight2">
                                                    <div className="yuan"></div>
                                                </div>
                                                <div className="borderRight3">
                                                    <div className="yuan"></div>
                                                </div>
                                                <div className="borderRight4">
                                                    <div className="yuan"></div>
                                                </div>
                                                <div className="borderleft1"></div>
                                                <div className="borderleft2"></div>
                                                <div className="borderleft3"></div>
                                                <div className="borderleft4"></div>
                                                <div className="borderright1"></div>
                                                <div className="borderright2"></div>
                                                <div className="borderright3"></div>
                                                <div className="borderright4"></div>
                                            </div>
                                            <div className="img">
                                                <img src={v.url} alt=""/>
                                            </div>
                                            <div className="imgtitle">
                                                <div className="chan">{v.title1}</div>
                                                <div className="hot">THE HOT</div>
                                            </div>
                                            <div className="describe">
                                                <p>{v.describe}</p>
                                            </div>
                                        </li>
                                    </a>
                                )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Pages page={page}/>
                <common.Footer/>
            </div>

        )

    }
}
var data=[
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/1'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/2'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/3'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/4'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/2'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/2'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/2'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/2'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/2'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/2'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/2'},
    {url:'/index/images/dd_03.png',title1:'正品龙门堂铁龙壶',describe:'千年实铁源自天然，独具匠心的精心雕琢,百里挑一',href:'/product/1/2'}
];
const nav=[
    {title: '最新资讯',href:'/news'},
    {title: '合作加盟',href:'/contact'},
    {title: '铸铁文化',href:'/culture'},
    {title: '经典铁壶',href:'/product'},
    {title: '铁府首页',href:'/'}
];
const sidenav = [
    {name: '经典铁壶',title:'CLASSSICIRONPOT',href:'/product/1'},
    {name: '生肖铁壶',title:'ZODIACIRONPOT',href:'/product/2'},
    {name: '铁器礼品',title:'IRONGIFTS',href:'/product/3'},
    {name: '精选礼品',title:'SELECTGIFTS',href:'/product/4'},
    {name: '精湛工艺',title:'EXQUISITECRAFT',href:'/product/5'}
];
const news=[
    {
        newurl:'/news/1/2',
        title:'寻觅云高风清的淡泊',
        images:'/index/images/bin_sna.png',
        con:'MICHELIN STAR CHEF RESTAURANT TO VISIT OUR SHOPOUR SHOP......',
        time:'2017-10-14 08:00'
    }
];
ReactDOM.render(<ProductShow data={data}/>,document.getElementById('product'));